import React, {
    useMemo,
    useRef,
    useEffect,
    useState
} from "react";

// r3f
import * as THREE from 'three';
import { Text } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

const modelScale: number = 3.7;

const Model: React.FC = () => {
    const modelPath = "/models/torso.glb";
    const { scene } = useGLTF(modelPath);
    const { viewport } = useThree();
    const meshRef = useRef<THREE.Mesh>(null);

    const [xCoords, setXCords] = useState<number>(0);
    const [yCoords, setYCords] = useState<number>(0);
    const [lerpedX, setLerpedX] = useState<number>(0);
    const [lerpedY, setLerpedY] = useState<number>(0);

    useEffect(() => {
        const getCoords = (e: any) => {
            setXCords(e.clientX);
            setYCords(e.clientY);
        }
        window.addEventListener('mousemove', getCoords)

        return () => {
            window.removeEventListener('mousemove', getCoords)
        }
    }, [])


    // Extract geometry from the GLTF scene
    const geometry = useMemo(() => {
        let extractedGeometry = new THREE.BufferGeometry();

        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.geometry) {
                extractedGeometry = child.geometry;
            }
        });

        return extractedGeometry;
    }, [scene]);

    // rotatation - Y-axis + lerped mouse movement
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0;
        }

        // lerped movement
        const lerpFactor = 0.05;
        setLerpedX(prev => prev + (xCoords - prev) * lerpFactor);
        setLerpedY(prev => prev + (yCoords - prev) * lerpFactor);
    });



    return (
        <group scale={viewport.width / 3.27}>
            <Text
                // font="/fonts/GeistMono-Medium.otf"
                position={[0, 0.01, -1]}
                fontSize={1}
                color="#B7B7B7"
                anchorX="center"
                anchorY="middle">
                LIMINALITY
            </Text>

            <mesh
                ref={meshRef}
                geometry={geometry}
                position={[
                    0.2 + lerpedX * .00006 * -1,
                    -.73 + lerpedY * .00006 * 1,
                    .1
                ]}
                rotation={[
                    .175,
                    (Math.PI / 2.9 * -1),
                    0
                ]}
                scale={[modelScale, modelScale, modelScale]}>

                <MeshTransmissionMaterial
                    transmission={1.03}
                    thickness={lerpedX * .0003 + .2}
                    roughness={0.15}
                    ior={1.2}
                    chromaticAberration={lerpedY * .0001 + .025}
                    backside={false}
                />
            </mesh>
        </group>
    )
}

export default Model