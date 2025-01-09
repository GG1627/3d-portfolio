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
        position={[-21, -6.27, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* 3rd */}
      <mesh
        position={[-21, -1.84, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* 4th */}
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
      {/* 5th */}
      <mesh
        position={[-21, 7.04, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* 6th */}
      <mesh
        position={[-21, 11.5, -3.9]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 0.65, 4]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* Long Piece */}
      <mesh
        position={[-21, -1, -4.96]}
        rotation={[0, 0, 0]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[4.5, 25, 1]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
    </>
  );
}
