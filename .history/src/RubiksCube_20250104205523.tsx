import { useGLTF } from "@react-three/drei";

export default function RubiksCube() {
  const rubiks = useGLTF("rubiks_cube.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[0.008, 0.008, 0.008]}
        position={[0, 17.05, 0]}
        rotation={[0, toRadians(60), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
