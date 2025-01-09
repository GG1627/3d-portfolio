import { useGLTF } from "@react-three/drei";

export default function RubiksCube() {
  const rubiks = useGLTF("rubiks_cube.glb");

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[0.008, 0.008, 0.008]}
        position={[0, 17.05, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
