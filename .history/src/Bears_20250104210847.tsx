import { useGLTF } from "@react-three/drei";

export default function Bears() {
  const bears = useGLTF("/bears.glb");

  return (
    <>
      <primitive
        object={bears.scene}
        scale={[5, 5, 5]}
        position={[0, 0, 0]}
        // rotation={[0, 0, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
