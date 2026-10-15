"use client";
import Image from "next/image";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Preload,
  Sparkles,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// function ColdChamber() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     const t = state.clock.getElapsedTime();
//     meshRef.current.rotation.y = t * 0.15;
//     meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
//   });

//   return (
//     <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
//       <mesh ref={meshRef} position={[0, 0, 0]} scale={0.09}>
//         <icosahedronGeometry args={[1, 4]} />
//         <MeshTransmissionMaterial
//           backside
//           samples={6}
//           thickness={0.5}
//           chromaticAberration={0.4}
//           anisotropy={0.3}
//           distortion={0.2}
//           distortionScale={0.5}
//           temporalDistortion={0.1}
//           ior={1.4}
//           color="#22D3EE"
//           attenuationDistance={1}
//           attenuationColor="#6366F1"
//         />
//       </mesh>
//     </Float>
//   );
// }

// function AmbientCubes() {
//   const group = useRef<THREE.Group>(null);

//   useFrame((state) => {
//     if (!group.current) return;
//     group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
//   });

//   const positions: [number, number, number][] = [
//     [-3, 1.5, -2],
//     [3.5, -1, -1.5],
//     [-2.5, -1.8, 1],
//     [2.8, 2, 0.5],
//     [0, -2.5, -3],
//     [-4, 0, 2],
//   ];

//   return (
//     <group ref={group}>
//       {positions.map((pos, i) => (
//         <Float key={i} speed={1 + i * 0.2} floatIntensity={1}>
//           <mesh position={pos} rotation={[Math.random(), Math.random(), 0]}>
//             <boxGeometry args={[0.3, 0.3, 0.3]} />
//             <meshStandardMaterial
//               color={i % 2 === 0 ? "#22D3EE" : "#6366F1"}
//               emissive={i % 2 === 0 ? "#22D3EE" : "#6366F1"}
//               emissiveIntensity={2}
//               toneMapped={false}
//             />
//           </mesh>
//         </Float>
//       ))}
//     </group>
//   );
// }

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mob.webp" />
          <Image
            src="/hero.webp"
            alt="Cold Storage Warehouse in Saudi Arabia"
            fill
            priority
            className="object-cover"
          />
        </picture>
        <div className="absolute inset-0" />
      </div>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#22D3EE" />
          <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#6366F1" />
          <pointLight position={[0, 0, 3]} intensity={2} color="#22D3EE" />

          {/* <ColdChamber /> */}
          {/* <AmbientCubes /> */}

          <Sparkles
            count={40}
            scale={5}
            size={5}
            speed={0.3}
            opacity={0.5}
            color="#22D3EE"
          />

          <Environment preset="night" />

          {/* <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.1} darkness={0.8} />
          </EffectComposer> */}

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}