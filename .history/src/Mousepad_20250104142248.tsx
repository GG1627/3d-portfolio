export default function Mousepad() {
  return (
    <>
      <mesh
        position={[5.5, 1.3, 1.5]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[3.5, 0.05, 2.5]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#404040" />
      </mesh>
    </>
  );
}
