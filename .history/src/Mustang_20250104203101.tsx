import { useGLTF } from "@react-three/drei";

export default function Mustang() {
  const mustang = useGLTF("/mustang.glb");

  return (
    <>
      <primitive
        object={mustang.scene}
        scale={[5, 5, 5]}
        position={[0, 0, 0]}
        // rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
