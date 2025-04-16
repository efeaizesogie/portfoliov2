import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import Particles from "./Particles.jsx";
import HeroLights from "./HeroLights.jsx";
import {Room} from "./Room.jsx";
import {useMediaQuery} from "react-responsive";
import {OrbitControls} from "@react-three/drei";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <Canvas camera={{position: [0,0,15], fov: 45}}>
            <ambientLight intensity={0.2} color="#1a1a40" />

            <OrbitControls
                enablePan={false} // Prevents panning of the scene
                enableZoom={false} // Disables zoom on tablets
                maxDistance={20} // Maximum distance for zooming out
                minDistance={5} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
                maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
            />

            <Suspense fallback={null}>
                <HeroLights/>
                <Particles count={100}/>

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
