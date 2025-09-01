import React from "react";

// r3f
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// components
import Model from "./model";

const Scene: React.FC = () => {
    return (
        <>
            <Canvas style={{ background: 'rgb(0, 0, 0)' }}>
                <Model />
                <directionalLight intensity={0} position={[0, 2, 3]} />
                {/* <Environment preset="city" /> */}
            </Canvas>
        </>
    )
}

export default Scene