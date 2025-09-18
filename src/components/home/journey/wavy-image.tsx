import React from "react";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// props
import type { WavyImageProps } from "../../../interfaces/props";

const WavyImage: React.FC<WavyImageProps> = ({ image }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const uniformsRef = useRef<any>(null);
    const hoverTarget = useRef<number>(0);
    const clock = useRef(new THREE.Clock());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(container.clientWidth, container.clientHeight, false);
        renderer.setClearColor(0x000000, 1); // ✅ black background
        
        // Ensure canvas fits within container
        const canvas = renderer.domElement;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.display = 'block';
        
        container.appendChild(canvas);
        rendererRef.current = renderer;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin("anonymous");
        loader.load(image, (tex) => {
            tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;

            const uniforms = {
                u_time: { value: 0 },
                u_mouse: { value: new THREE.Vector2(-1, -1) },
                u_hover: { value: 0 },
                u_texture: { value: tex },
            };
            uniformsRef.current = uniforms;

            const material = new THREE.ShaderMaterial({
                uniforms,
                vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
                fragmentShader: `
          precision highp float;
          uniform sampler2D u_texture;
          uniform vec2  u_mouse;
          uniform float u_time;
          uniform float u_hover;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;
            vec2 mouse = u_mouse;
            vec4 tex = texture2D(u_texture, uv);

            if (u_hover > 0.001) {
              float dist = distance(uv, mouse);
              float wave = sin(dist * 10.0 - u_time * 4.0);
              float ripple = 0.05 * wave * exp(-dist * 8.0) * u_hover;
              vec2 offset = ripple * normalize(uv - mouse);
              offset += ripple * vec2(cos(u_time + dist*30.0), sin(u_time + dist*30.0)) * 0.05;
              uv += offset;
            }

            if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // ✅ black fallback
            } else {
              gl_FragColor = texture2D(u_texture, uv);
            }
          }
        `,
            });

            const geometry = new THREE.PlaneGeometry(2, 2);
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const canvas = renderer.domElement;

            canvas.addEventListener("pointerenter", () => {
                hoverTarget.current = 1.0;
            });

            canvas.addEventListener("pointerleave", () => {
                hoverTarget.current = 0.0;
            });

            canvas.addEventListener("pointermove", (e) => {
                const rect = canvas.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1.0 - (e.clientY - rect.top) / rect.height;
                uniforms.u_mouse.value.x += (x - uniforms.u_mouse.value.x) * 0.2;
                uniforms.u_mouse.value.y += (y - uniforms.u_mouse.value.y) * 0.2;
            });

            const animate = () => {
                requestAnimationFrame(animate);
                const dt = Math.min(clock.current.getDelta(), 0.05);

                if (uniformsRef.current) {
                    uniformsRef.current.u_hover.value += (hoverTarget.current - uniformsRef.current.u_hover.value) * 4.0 * dt;
                    uniformsRef.current.u_time.value += dt;
                }

                renderer.render(scene, camera);
            };
            animate();
        });

        const handleResize = () => {
            if (rendererRef.current && containerRef.current) {
                const w = containerRef.current.clientWidth;
                const h = containerRef.current.clientHeight;
                rendererRef.current.setSize(w, h, false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
                rendererRef.current.forceContextLoss();
                rendererRef.current.domElement.remove();
                rendererRef.current = null;
            }
            uniformsRef.current = null;
        };
    }, []);

    return (
        <div ref={containerRef}
            style={{
                width: "100%",
                position: 'absolute',
                height: '100%',
                top: 0,
                left: 0,
                overflow: 'hidden'
            }}
        />
    );
}

export default WavyImage