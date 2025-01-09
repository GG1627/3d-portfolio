export default function WallShelves() {
  return (
    <>
      <mesh
        position={[-21, 2.5, -1]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.2, 0.8, 2.5]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
    </>
  );
}
