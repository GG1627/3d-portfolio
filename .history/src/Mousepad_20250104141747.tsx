import { Mesh } from "@react-three/fiber";

export default function Mousepad() {
  return (
    <>
      <mesh
        position={[4, 1.3, 2]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[3, 0.01, 2]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#2e86c1" />
      </mesh>
    </>
  );
}