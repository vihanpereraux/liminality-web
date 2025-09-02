import React from "react";

// r3f
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Noise } from "@react-three/postprocessing";
import { Vignette } from "@react-three/postprocessing";
import { ChromaticAberration } from "@react-three/postprocessing";

// components
import Model from "./model";


const Scene: React.FC = () => {
    return (
        <>
            <Canvas
                style={{ background: 'rgb(0, 0, 0)' }}
                shadows
                camera={{
                    position: [0, 0, 5],
                    fov: 40
                }}>
                <Model />
                {/* <EffectComposer>
                    <Noise opacity={0.2} />
                    <Vignette eskil={false} offset={0.2} darkness={1} />
                    <ChromaticAberration opacity={1} />
                </EffectComposer> */}
                <ambientLight intensity={0.65} />
            </Canvas>
        </>
    )
}

export default Scene