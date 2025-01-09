import { useGLTF } from "@react-three/drei";

export default function Bears() {
  const bears = useGLTF("/teddy_bears.glb");

  return (
    <>
      <primitive
        object={bears.scene}
        scale={[1, 1, 1]}
        position={[0, 16, 0]}
        // rotation={[0, 0, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
