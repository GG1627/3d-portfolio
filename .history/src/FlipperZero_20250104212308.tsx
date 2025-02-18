import { useGLTF } from "@react-three/drei";

export default function FlipperZero() {
  const flipper = useGLTF("/flipper_zero.glb");

  return (
    <>
      <primitive
        object={flipper.scene}
        scale={[3, 3, 3]}
        position={[0, 10, 0]}
      ></primitive>
    </>
  );
}
