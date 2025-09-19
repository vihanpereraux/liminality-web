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
            
            // Check if camera position has reached 5 (within 0.1 units)
            if (Math.abs(newZ - 5) < 0.1 && currentZ > 5.1) {
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
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate();
    
    const handleAnimationComplete = () => {
        // Show the black overlay first
        setShowOverlay(true);
        
        // Navigate after overlay animation completes (2 seconds)
        setTimeout(() => {
            navigate('/chamber-four');
        }, 2000);
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

                {/* Black Overlay */}
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'black',
                        zIndex: 2000,
                        opacity: showOverlay ? 1 : 0,
                        visibility: showOverlay ? 'visible' : 'hidden',
                        transition: 'opacity 2s ease-in-out, visibility 0s linear ' + (showOverlay ? '0s' : '2s'),
                        pointerEvents: showOverlay ? 'auto' : 'none',
                    }}
                />
            </Box>
        </>
    )
}

export default Scene