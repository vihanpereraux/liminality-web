import React, { useState, useEffect, useMemo, useRef } from "react";

// r3f
import * as THREE from "three"
import { Clouds, Cloud } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei"

const Model: React.FC = () => {
    const [_, setVolume] = useState(2);
    const [rotationY, setRotationY] = useState(Math.PI / 1.075);

    const modelPath = "/models/lowpoly_human.glb"
    const { scene } = useGLTF(modelPath);
    const humanMeshRef = useRef<THREE.Mesh>(null);
    const rotationIntervalRef = useRef<number | null>(null);

    const geometry = useMemo(() => {
        let extractedGeometry = new THREE.BufferGeometry();
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.geometry) {
                extractedGeometry = child.geometry;
            }
        });

        return extractedGeometry
    }, [scene])

    // Easing function for smooth start/stop with fast movement
    const easeInOutQuart = (t: number) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animateRotation = (startRotation: number, endRotation: number) => {
        const startTime = Date.now();
        const duration = 2000; // 2 seconds for each rotation

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Apply easing function
            const easedProgress = easeInOutQuart(progress);

            // Linear interpolation with easing
            const currentRotation = startRotation + (endRotation - startRotation) * easedProgress;
            setRotationY(currentRotation);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    };

    useEffect(() => {
        // Start the rotation cycle
        let currentRotation = Math.PI / 1.075;

        const startRotationCycle = () => {
            const nextRotation = currentRotation + Math.PI / 2; // 180 degrees
            animateRotation(currentRotation, nextRotation);
            currentRotation = nextRotation;
        };

        // Start immediately and then repeat every 2.5 seconds (2s animation + 0.5s pause)
        rotationIntervalRef.current = setInterval(startRotationCycle, 2500);

        return () => {
            if (rotationIntervalRef.current) {
                clearInterval(rotationIntervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const startTime = Date.now();
        const duration = 5000;
        const startValue = 2;
        const endValue = 20;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Linear interpolation (lerp)
            const currentValue = startValue + (endValue - startValue) * progress;
            setVolume(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    useFrame((_, delta) => {
        if (humanMeshRef.current) {
            if (!false) {
                humanMeshRef.current.rotation.z += delta * 0.35;
            }
        }
    });

    return (
        <>
            <mesh scale={.5}>
                <mesh scale={[40, 40, 40]}
                    position={[0, 0, 0]}
                    rotation={[0, rotationY, 0]}>
                    <boxGeometry />
                    <MeshTransmissionMaterial
                        transmission={1}
                        thickness={.1}
                        roughness={.1}
                        ior={1}
                        chromaticAberration={.055}
                        backside={false} />
                </mesh>

                <mesh ref={humanMeshRef}
                    geometry={geometry}
                    position={[0, -2, 0]}
                    rotation={[-Math.PI / 2, 0, .95]}
                    scale={[.75, .75, .75]}
                    castShadow
                    receiveShadow >

                    <meshStandardMaterial
                        color="rgba(218, 0, 252, 1)"
                        transparent={false}
                        opacity={1} />
                </mesh>

                <Clouds limit={400} material={THREE.MeshLambertMaterial}>
                    <Cloud
                        color={"rgba(234, 0, 255, 1)"}
                        seed={1}
                        position={[0, 0, 0]}
                        fade={80}
                        speed={1}
                        growth={10}
                        segments={20}
                        volume={30}
                        opacity={.45}
                        bounds={[6, 0, 1]}
                    />
                </Clouds>
            </mesh>

            <OrbitControls />
        </>
    )
}

export default Model