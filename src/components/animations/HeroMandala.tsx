'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

function RotatingRings() {
  const ring1Ref = useRef<any>(null);
  const ring2Ref = useRef<any>(null);
  const ring3Ref = useRef<any>(null);

  useFrame(() => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += 0.01;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= 0.008;
    if (ring3Ref.current) ring3Ref.current.rotation.x += 0.005;
  });

  return (
    <group>
      <mesh ref={ring1Ref}>
        <ringGeometry args={[2, 2.2, 64]} />
        <meshBasicMaterial color="#F97316" side={THREE.DoubleSide} transparent opacity={0.7} />
      </mesh>
      <mesh ref={ring2Ref}>
        <ringGeometry args={[2.3, 2.5, 64]} />
        <meshBasicMaterial color="#EAB308" side={THREE.DoubleSide} transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1.8, 0.03, 16, 100]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      {/* Zodiac symbols placed around */}
      {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((sym, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 2.8;
        const y = Math.sin(angle) * 2.8;
        return (
          <Text key={i} position={[x, y, 0]} fontSize={0.25} color="#fff" anchorX="center" anchorY="middle">
            {sym}
          </Text>
        );
      })}
    </group>
  );
}

export default function HeroMandala() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <RotatingRings />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      {/* Overlay portrait in the center, large */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
          <Image
            src="/images/acharya-portrait.svg"
            alt="Acharya Nikhil Shastri"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
