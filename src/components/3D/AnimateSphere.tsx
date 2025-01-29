<<<<<<< HEAD
import { useRef, useState } from "react";
import {  useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function AnimatedSphere({
  position,
}: {
  position: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={hovered ? "#00ff88" : "#3498db"}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0.1}
        distort={hovered ? 0.6 : 0.3}
        speed={5}
      />
    </mesh>
  );
}
=======
import { useRef, useState } from "react";
import {  useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function AnimatedSphere({
  position,
}: {
  position: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={hovered ? "#00ff88" : "#3498db"}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0.1}
        distort={hovered ? 0.6 : 0.3}
        speed={5}
      />
    </mesh>
  );
}
>>>>>>> 6a0d284372c48df77baf6f1da3006b866cae8f04
