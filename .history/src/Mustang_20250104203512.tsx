import { useGLTF } from "@react-three/drei";

export default function Mustang() {
  const mustang = useGLTF("/mustang.glb");

  return (
    <>
      <primitive
        object={mustang.scene}
        scale={[100, 100, 100]}
        position={[7.7, 12.17, -3]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
