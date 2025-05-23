import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 50 }) => { // Reduced particle count from 200 to 50
    const mesh = useRef();
    const frameSkip = useRef(0);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    Math.random() * 10 + 5, // higher starting point
                    (Math.random() - 0.5) * 10,
                ],
                speed: 0.005 + Math.random() * 0.001,
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        // Only update every 2 frames to reduce CPU usage
        frameSkip.current = (frameSkip.current + 1) % 2;
        if (frameSkip.current !== 0) return;

        const positions = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            let y = positions[i * 3 + 1];
            y -= particles[i].speed;
            if (y < -2) y = Math.random() * 10 + 5;
            positions[i * 3 + 1] = y;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    const positions = new Float32Array(count * 3);
    particles.forEach((p, i) => {
        positions[i * 3] = p.position[0];
        positions[i * 3 + 1] = p.position[1];
        positions[i * 3 + 2] = p.position[2];
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.05}
                transparent={true}
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    );
};

export default Particles;
