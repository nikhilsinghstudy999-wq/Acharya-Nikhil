'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function RotatingZodiac() {
  const groupRef = useRef<any>(null);
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.005;
  });

  const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const radius = 2;
  return (
    <group ref={groupRef}>
      {signs.map((symbol, i) => {
        const angle = (i / signs.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <Text key={i} position={[x, 0, z]} fontSize={0.4} color="#D4AF37" anchorX="center" anchorY="middle">
            {symbol}
          </Text>
        );
      })}
    </group>
  );
}

export default function ZodiacWheel3D() {
  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingZodiac />
      </Canvas>
    </div>
  );
}
