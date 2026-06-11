'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function GalaxyParticles() {
  const meshRef = useRef<any>(null);
  useFrame(() => { if(meshRef.current) meshRef.current.rotation.y += 0.0002; });
  return (
    <mesh ref={meshRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </mesh>
  );
}

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position:[0,0,1] }}>
        <GalaxyParticles />
      </Canvas>
    </div>
  );
}
