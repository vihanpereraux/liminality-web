import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Typography } from "@mui/material"

// r3f
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { Noise, EffectComposer, Vignette } from "@react-three/postprocessing";

// components
import Model from "./model";

const CameraController: React.FC<{ targetZ: number; onAnimationComplete: () => void }> = ({ targetZ, onAnimationComplete }) => {
    const cameraRef = useRef<any>(null);

    useFrame(() => {
        if (cameraRef.current) {
            const currentZ = cameraRef.current.position.z;
            const newZ = currentZ + (targetZ - currentZ) * 0.02;
            cameraRef.current.position.z = newZ;
            
            // Check if animation is nearly complete (within 0.1 units of target)
            if (Math.abs(newZ - targetZ) < 0.1 && targetZ !== 13) {
                onAnimationComplete();
            }
        }
    });

    return (
        <PerspectiveCamera 
            ref={cameraRef}
            makeDefault
            position={[0, 0, 13]}
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
    );
};

const Scene: React.FC = () => {
    const [cameraZ, setCameraZ] = useState(13);
    const navigate = useNavigate();
    
    const handleAnimationComplete = () => {
        // Navigate to chamber-four after animation completes
        navigate('/chamber-four');
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            
            setCameraZ(prevZ => {
                const scrollSensitivity = 0.01;
                const deltaZ = e.deltaY * scrollSensitivity;
                const newZ = Math.max(5, Math.min(13, prevZ + deltaZ));
                return newZ;
            });
        };

        // Add event listener to the window
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Cleanup
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <>
            <Box style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
                <Canvas style={{ width: '100%', height: '100%' }}>
                    <color attach="background" args={['black']} />
                    <ambientLight intensity={Math.PI / 2} />
                    <CameraController targetZ={cameraZ} onAnimationComplete={handleAnimationComplete} />
                    <Model />
                    <EffectComposer>
                        <Noise opacity={.175} />
                        <Vignette eskil={false} offset={0.1} darkness={1} />
                    </EffectComposer>
                </Canvas>

                <Typography 
                    // onClick={() => setCameraZ(4)}
                    sx={{
                    position: 'fixed',
                    color: 'white',
                    textTransform: 'uppercase',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '60%',
                    zIndex: 1000,
                    fontSize: 12,
                    fontFamily: 'GeistMono-Medium',
                }}>
                    scroll into the void to continue the experience
                </Typography>
            </Box>
        </>
    )
}

export default Scene