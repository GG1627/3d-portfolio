export default function WallShelves() {
  return (
    <>
      <mesh
        position={[5.9, 1.27, 1.5]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[3.5, 0.2, 2.5]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
    </>
  );
}