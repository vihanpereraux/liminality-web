import React from "react";

// MUI
import { Box } from "@mui/material"

// r3f
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
// import { OrbitControls } from "@react-three/drei"
import { Noise, EffectComposer, Vignette } from "@react-three/postprocessing";

// components
import Model from "./model";

const Scene: React.FC = () => {
    // const shake = useRef<any>(null);

    return (
        <>
            <Box style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
                <Canvas style={{ width: '100%', height: '100%' }}>
                    <color attach="background" args={['black']} />
                    <ambientLight intensity={Math.PI / 2} />
                    <PerspectiveCamera makeDefault
                        position={[0, 0, 12]}
                        fov={75}
                        onUpdate={(self) => {
                            self.lookAt(0, 0, 0)
                        }}>
                        <spotLight
                            position={[5, 5, -5]}
                            color="rgba(255, 0, 0, 1)"
                            angle={0.3}
                            decay={0.75}
                            distance={200}
                            penumbra={-1}
                            intensity={130} />

                        <spotLight position={[-3, -5, -5]}
                            color="rgba(191, 0, 255, 1)"
                            angle={0.3}
                            decay={0.75}
                            distance={200}
                            penumbra={-1}
                            intensity={100} />
                    </PerspectiveCamera>
                    <Model />
                    <EffectComposer>
                        <Noise opacity={.175} />
                        <Vignette eskil={false} offset={0.1} darkness={1} />
                    </EffectComposer>
                    {/* <OrbitControls /> */}
                </Canvas>
            </Box>
        </>
    )
}

export default Scene