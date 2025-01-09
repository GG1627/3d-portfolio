import { RoundedBox } from "@react-three/drei";

export default function Mousepad() {
  return (
    <>
      <RoundedBox
        args={[3, 0.01, 2]} // Width, height, depth
        radius={0.1} // Border radius
        smoothness={4} // How smooth the edges should be
        position={[2.5, -4, 2]} // Position in the scene
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#2e86c1" /> {/* Adjust color as needed */}
      </RoundedBox>
    </>
  );
}
