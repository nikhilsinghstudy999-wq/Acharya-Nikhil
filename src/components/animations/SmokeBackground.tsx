'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SmokeParticles() {
  const particlesRef = useRef<any>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20;
      pos[i + 1] = (Math.random() - 0.5) * 12;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x += 0.0002;
      const colors = particlesRef.current.geometry.attributes.color.array;
      const t = state.clock.getElapsedTime() * 0.2;
      for (let i = 0; i < colors.length; i += 3) {
        // Cycle through orange, white, yellow
        const phase = Math.sin(t + i * 0.01) * 0.5 + 0.5;
        colors[i] = 1.0;                    // R – max red for orange/yellow
        colors[i + 1] = 0.5 + phase * 0.5; // G – blend to white
        colors[i + 2] = phase * 0.3;       // B – low, keeps warm tones
      }
      particlesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  const colorArray = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = 1.0;            // R
      arr[i + 1] = 0.7;        // G
      arr[i + 2] = 0.2;        // B
    }
    return arr;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function SmokeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
      <Canvas camera={{ position: [0, 0, 5] }}>
        <SmokeParticles />
        <ambientLight intensity={0.3} />
      </Canvas>
      {/* Bright gradient washes */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 via-yellow-200/20 to-white/10" />
    </div>
  );
}
