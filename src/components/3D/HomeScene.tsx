import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sparkles } from "@react-three/drei";
import FloatingLogo from "./FloatingLogo";
import AnimatedSphere from "./AnimateSphere";
import InfiniteGrid from "./InfiniteGrid";

export function HomeScene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />

      <color attach="background" args={["#000"]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />

      <FloatingLogo />

      <AnimatedSphere position={[-4, 0, -5]} />
      <AnimatedSphere position={[4, 0, -5]} />

      <Sparkles count={200} scale={20} size={2} speed={0.5} opacity={0.1} />

      <InfiniteGrid />

      <Environment preset="city" />
    </Canvas>
  );
}
