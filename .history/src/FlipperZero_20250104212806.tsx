import { useGLTF } from "@react-three/drei";

export default function FlipperZero() {
  const flipper = useGLTF("/flipper_zero.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  return (
    <>
      <primitive
        object={flipper.scene}
        scale={[2.5, 2.5, 2.5]}
        position={[-8, 16.7, -3]}
        rotation={[toRadians(20), -toRadians(85), -toRadians(15)]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}