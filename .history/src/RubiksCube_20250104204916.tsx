import { useGLTF } from "@react-three/drei";

export default function RubiksCube() {
  const rubiks = useGLTF("rubiks_cube.glb");

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[14, 14, 14]}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
