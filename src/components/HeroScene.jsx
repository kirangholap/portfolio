import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function SignalKnot() {
  const mesh = useRef();

  useFrame((_state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.14;
  });

  return (
    <mesh ref={mesh} scale={[1.45, 1.45, 1.45]}>
      <torusKnotGeometry args={[0.88, 0.18, 180, 18]} />
      <meshStandardMaterial color="#4FC3FF" emissive="#153B68" roughness={0.34} metalness={0.42} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 2, 4]} intensity={16} color="#8B5CF6" />
        <pointLight position={[-3, -2, 2]} intensity={10} color="#4FC3FF" />
        <SignalKnot />
      </Canvas>
    </div>
  );
}
