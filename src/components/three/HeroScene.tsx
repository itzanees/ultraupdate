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