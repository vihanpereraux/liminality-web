import React from "react";

// r3f
import { Canvas } from "@react-three/fiber";

// components
import Model from "./model";


const Scene: React.FC = () => {
    return (
        <>
            <Canvas
                style={{ background: 'rgb(0, 0, 0)' }}
                shadows
                camera={{ position: [0, 0, 5], fov: 40 }}>
                <Model />
                <ambientLight intensity={0.35} />
            </Canvas>
        </>
    )
}

export default Scene