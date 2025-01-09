import { useGLTF } from "@react-three/drei";

export default function FlipperZero() {
  const flipper = useGLTF("/flipper_zero.glb");

  return (
    <>
      <primitive
        object={flipper.scene}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
      ></primitive>
    </>
  );
}
