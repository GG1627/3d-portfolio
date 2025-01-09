export default function WallShelves() {
  return (
    <>
      {/* 1st  */}
      <mesh
        position={[-21, -10.73, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* 2nd */}
      <mesh
        position={[-21, -6.1, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      <mesh
        position={[-21, 2.59, -3.9]} // Position in the scene
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
