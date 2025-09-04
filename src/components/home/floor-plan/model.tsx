import React, {
    useMemo,
    useRef,
    useEffect,
    useState
} from "react";

// r3f
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

// const modelScale: number = .29;

const Model: React.FC = () => {
    const modelPath = "/models/floor_plan.glb";
    const { scene } = useGLTF(modelPath);
    const { viewport, camera, gl } = useThree();
    const meshRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    // Mouse tracking state
    const [mousePosition, setMousePosition] = useState<THREE.Vector3>(new THREE.Vector3(0, 1, 0));
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const mouse = useMemo(() => new THREE.Vector2(), []);
    const [_, setIsHovered] = useState<boolean>(false);

    // camera
    useEffect(() => {
        camera.position.set(1, 2, 1);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
    }, [camera]);

    // Mouse tracking effect
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const canvas = gl.domElement;
            const rect = canvas.getBoundingClientRect();

            // Convert mouse coordinates to normalized device coordinates (-1 to +1)
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            // Update raycaster
            raycaster.setFromCamera(mouse, camera);

            // Create an invisible plane at y=0 to intersect with
            const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            const intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersection);

            if (intersection) {
                // Scale the intersection point to match the terrain size
                const scaledPosition = intersection.clone().multiplyScalar(viewport.width / 3.27);
                setMousePosition(scaledPosition.clone().setY(1)); // Keep light above terrain
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [camera, gl.domElement, mouse, raycaster, viewport.width]);


    const geometry = useMemo(() => {
        let extractedGeometry = new THREE.BufferGeometry();
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.geometry) {
                extractedGeometry = child.geometry;
            }
        });

        return extractedGeometry;
    }, [scene]);

    useFrame((_, delta) => {
        if (meshRef.current) {
            if (!false) {
                meshRef.current.rotation.y += delta * 0.1;
            }
        }

        if (lightRef.current) {
            lightRef.current.position.copy(mousePosition);
        }
    });

    return (
        <>
            <pointLight
                ref={lightRef}
                position={mousePosition}
                color="rgba(255, 255, 255, 1)"
                intensity={2.55}
                distance={1} />

            <group ref={meshRef} scale={viewport.width / 3.27}>
                <mesh geometry={geometry}
                    position={[0, 0.1, 0]}
                    rotation={[0, 0, 0]}
                    scale={[.30, .30, .30]}
                    castShadow
                    receiveShadow >

                    <meshStandardMaterial
                        color="rgba(180, 180, 180, 1)"
                        transparent={false}
                        opacity={1} />
                </mesh>

                <mesh scale={[.5, .3, .5]}
                    position={[0.5, .125, 0]}
                    onPointerEnter={(e) => {
                        e.stopPropagation();
                        setIsHovered(true);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'enter',
                                elementId: 'room-01',
                                text: 'Room-01'
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}
                    onPointerLeave={(e) => {
                        e.stopPropagation();
                        setIsHovered(false);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'leave',
                                elementId: 'room-01',
                                text: null
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}>
                    <boxGeometry />
                    <meshBasicMaterial color={'black'} wireframe />
                </mesh>

                <mesh
                    scale={[.5, .3, .5]}
                    position={[-0.5, .125, 0]}
                    onPointerEnter={(e) => {
                        e.stopPropagation();
                        setIsHovered(true);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'enter',
                                elementId: 'room-02',
                                text: 'Room-02'
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}
                    onPointerLeave={(e) => {
                        e.stopPropagation();
                        setIsHovered(false);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'leave',
                                elementId: 'room-02',
                                text: null
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}>
                    <boxGeometry />
                    <meshBasicMaterial color={'black'} wireframe />
                </mesh>

                <mesh
                    scale={[.5, .12, .25]}
                    position={[0, 0.05, 0]}
                    onPointerEnter={(e) => {
                        e.stopPropagation();
                        setIsHovered(true);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'enter',
                                elementId: 'tunnel',
                                text: 'Tunnel'
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}
                    onPointerLeave={(e) => {
                        e.stopPropagation();
                        setIsHovered(false);
                        const customEvent = new CustomEvent('floorPlanHover', {
                            detail: {
                                type: 'leave',
                                elementId: 'tunnel',
                                text: null
                            }
                        });
                        window.dispatchEvent(customEvent);
                    }}>
                    <boxGeometry />
                    <meshBasicMaterial color={'black'} opacity={0} transparent wireframe />
                </mesh>
            </group>
        </>
    )
}

export default Model