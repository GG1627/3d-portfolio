import { useGLTF } from "@react-three/drei";

export default function RubiksCube() {
  const rubiks = useGLTF("rubiks_cube.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[0.006, 0.006, 0.006]}
        position={[-15, 16.82, -3]}
        rotation={[0, toRadians(138), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
