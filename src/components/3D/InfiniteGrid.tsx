export default function InfiniteGrid() {
  return (
    <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <group key={i}>
          <line>
            <bufferGeometry>
              <float32BufferAttribute
                attach="attributes-position"
                args={[new Float32Array([-10, i - 10, 0, 10, i - 10, 0]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3498db" opacity={0.2} transparent />
          </line>
          <line>
            <bufferGeometry>
              <float32BufferAttribute
                attach="attributes-position"
                args={[new Float32Array([i - 10, -10, 0, i - 10, 10, 0]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3498db" opacity={0.2} transparent />
          </line>
        </group>
      ))}
    </group>
  );
}
