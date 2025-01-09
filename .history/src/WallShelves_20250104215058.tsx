export default function WallShelves() {
  return (
    <>
      <mesh
        position={[-21, 2.59, -4]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
    </>
  );
}
