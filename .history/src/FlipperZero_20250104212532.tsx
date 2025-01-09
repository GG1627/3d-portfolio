import { useGLTF } from "@react-three/drei";

export default function FlipperZero() {
  const flipper = useGLTF("/flipper_zero.glb");

  return (
    <>
      <primitive
        object={flipper.scene}
        scale={[2.5, 2.5, 2.5]}
        position={[-8, 16.7, -3]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
