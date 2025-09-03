import * as THREE from "three"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Clouds, Cloud, CameraShake, Environment, PerspectiveCamera } from "@react-three/drei"

export default function App() {
    const shake = useRef<any>(null)
    
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000000' }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
                <color attach="background" args={['#ffffffff']} />
                <ambientLight intensity={Math.PI / 2} />
                <PerspectiveCamera makeDefault position={[0, 0, 11]} fov={75} onUpdate={(self) => self.lookAt(0, 0, 0)}>
                    <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={2000} />
                    <spotLight position={[-19, 0, -8]} color="red" angle={0.25} decay={0.75} distance={185} penumbra={-1} intensity={400} />
                </PerspectiveCamera>
                
                <CameraShake ref={shake} decay decayRate={0.95} maxYaw={0.05} maxPitch={0.01} yawFrequency={4} pitchFrequency={2} rollFrequency={2} intensity={0} />
                
                <Clouds limit={400} material={THREE.MeshLambertMaterial}>
                    <Cloud 
                        seed={40} 
                        position={[0, 0, 0]} 
                        fade={30} 
                        speed={2} 
                        growth={4} 
                        segments={40} 
                        volume={6} 
                        opacity={0.6} 
                        bounds={[4, 3, 1]} 
                    />
                    <Cloud 
                        seed={41} 
                        position={[0, 0, 0]} 
                        fade={30} 
                        speed={0} 
                        growth={4} 
                        volume={10} 
                        opacity={1} 
                        bounds={[6, 2, 1]} 
                    />
                </Clouds>
                
                {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_lagoon_night_1k.hdr" /> */}
            </Canvas>
        </div>
    )
}
