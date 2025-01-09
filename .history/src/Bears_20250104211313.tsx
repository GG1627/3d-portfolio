import { useGLTF } from "@react-three/drei";

export default function Bears() {
  const bears = useGLTF("/teddy_bears.glb");

  return (
    <>
      <primitive
        object={bears.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[-9.8, 16.2, -1]}
        // rotation={[0, 0, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
