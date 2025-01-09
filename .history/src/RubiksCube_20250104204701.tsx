import { useGLTF } from "@react-three/drei";

export default function RubiksCube() {
  const rubiks = useGLTF("rubiks_cube.glb");

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[4, 4, 4]}
        position={[15, 12.17, -4]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
