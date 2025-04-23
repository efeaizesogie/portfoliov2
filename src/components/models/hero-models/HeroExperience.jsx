import React, {Suspense, useEffect, useRef} from 'react'
import {Canvas} from "@react-three/fiber";
import Particles from "./Particles.jsx";
import HeroLights from "./HeroLights.jsx";
import {Room} from "./Room.jsx";
import {useMediaQuery} from "react-responsive";
import {OrbitControls} from "@react-three/drei";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const canvasRef = useRef(null);

    useEffect(() => {
        if (isMobile && canvasRef.current) {
            const canvas = canvasRef.current;
            let touchStartY = 0;
            let touchStartX = 0;

            // Function to handle touch start
            const handleTouchStart = (e) => {
                if (e.touches.length === 1) {
                    touchStartY = e.touches[0].clientY;
                    touchStartX = e.touches[0].clientX;
                }
            };

            // Function to handle touch move
            const handleTouchMove = (e) => {
                if (e.touches.length === 1) {
                    const touchY = e.touches[0].clientY;
                    const touchX = e.touches[0].clientX;

                    // Calculate vertical and horizontal movement
                    const deltaY = Math.abs(touchY - touchStartY);
                    const deltaX = Math.abs(touchX - touchStartX);

                    // If vertical movement is greater than horizontal movement by a threshold,
                    // it's likely a scroll gesture
                    if (deltaY > deltaX && deltaY > 10) {
                        // Prevent the 3D model from capturing this event
                        e.stopPropagation();
                        // Allow the default browser behavior (scrolling)
                        return true;
                    }
                }
            };

            // Add touch event listeners to the canvas
            canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
            canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

            return () => {
                // Clean up event listeners
                canvas.removeEventListener('touchstart', handleTouchStart);
                canvas.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isMobile]);

    return (
        <Canvas ref={canvasRef} camera={{position: [0,0,15], fov: 45}}>
            <ambientLight intensity={0.2} color="#1a1a40" />

            <OrbitControls
                enablePan={false} // Prevents panning of the scene
                enableZoom={false} // Disables zoom on tablets
                maxDistance={20} // Maximum distance for zooming out
                minDistance={5} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
                maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
                enableDamping={false} // Disable damping on mobile for better performance
                rotateSpeed={isMobile ? 0.5 : 1} // Reduce rotation speed on mobile
                touchAction="pan-y" // Allow vertical touch scrolling
            />

            <Suspense fallback={null}>
                <HeroLights/>
                <Particles count={30}/>

                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                rotation={[0, -Math.PI/4, 0]}>
                    <Room/>
                </group>
            </Suspense>

        </Canvas>
    )
}
export default HeroExperience
