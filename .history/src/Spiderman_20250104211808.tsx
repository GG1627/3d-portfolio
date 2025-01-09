import { useGLTF } from "@react-three/drei";

export default function Spiderman() {
  const spiderman = useGLTF("/spiderman.glb");

  return (
    <>
      <primitive
        object={spiderman.scene}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 0, 0]}
      ></primitive>
    </>
  );
}
