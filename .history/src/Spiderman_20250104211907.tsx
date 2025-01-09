import { useGLTF } from "@react-three/drei";

export default function Spiderman() {
  const spiderman = useGLTF("/spiderman.glb");

  return (
    <>
      <primitive
        object={spiderman.scene}
        scale={[1, 1, 1]}
        position={[0, 16.1, 0]}
      ></primitive>
    </>
  );
}
