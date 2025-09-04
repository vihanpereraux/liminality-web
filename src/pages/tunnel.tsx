import React from "react"

import * as THREE from "three"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Clouds, Cloud, CameraShake, PerspectiveCamera } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { MeshTransmissionMaterial } from "@react-three/drei"

const Tunnel: React.FC = () => {
    const shake = useRef<any>(null);

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
                <color attach="background" args={['black']} />
                <ambientLight intensity={Math.PI / 2} />
                <PerspectiveCamera makeDefault position={[0, 0, 11]} fov={75} onUpdate={(self) => self.lookAt(0, 0, 0)}>
                    <spotLight position={[12, 2, -2]} color="blue" angle={0.25} decay={0.75} distance={200} penumbra={-1} intensity={200} />
                    <spotLight position={[10, 1, -2]} color="red" angle={0.25} decay={0.75} distance={200} penumbra={-1} intensity={200} />
                </PerspectiveCamera>

                <CameraShake ref={shake} decay decayRate={0.95} maxYaw={0.05} maxPitch={0.01} yawFrequency={4} pitchFrequency={2} rollFrequency={2} intensity={0} />

                <mesh scale={.5}>
                    <mesh scale={[20, 20, 20]} position={[0, 0, 0]}>
                        <boxGeometry />
                        <MeshTransmissionMaterial
                            // wireframe
                            transmission={1.03}
                            thickness={1 * .0003 + .2}
                            roughness={0.15}
                            ior={1.2}
                            chromaticAberration={1 * .0001 + .025}
                            backside={false}
                        />
                    </mesh>

                    <Clouds limit={400} material={THREE.MeshLambertMaterial}>
                        <Cloud
                            color={"rgba(255, 255, 255, 1)"}
                            seed={10}
                            position={[0, 0, 0]}
                            fade={60}
                            speed={2}
                            growth={20}
                            segments={40}
                            volume={16}
                            opacity={0.9}
                            bounds={[6, 3, 1]}
                        />
                        {/* <Cloud 
                        seed={41} 
                        position={[0, 0, 0]} 
                        fade={30} 
                        speed={0} 
                        growth={4} 
                        volume={10} 
                        opacity={1} 
                        bounds={[6, 2, 1]} 
                    /> */}
                    </Clouds>
                </mesh>

                <OrbitControls />
                {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_lagoon_night_1k.hdr" /> */}
            </Canvas>
        </div>
    )
}

export default Tunnel