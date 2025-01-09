export default function Mousepad() {
  return (
    <>
      <mesh
        position={[5.5, 1.27, 1.5]} // Position in the scene
        castShadow
        receiveShadow
      >
        {/* BoxGeometry: Width, Height, Depth */}
        <boxGeometry args={[3.5, 0.09, 2.5]} />
        {/* Material: Add a color */}
        <meshStandardMaterial color="#292929" />
      </mesh>
    </>
  );
}
