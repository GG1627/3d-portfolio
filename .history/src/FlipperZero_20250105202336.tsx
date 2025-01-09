import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function FlipperZero() {
  const flipper = useGLTF("/flipper_zero.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Enable shadows for all children in the model
  flipper.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={flipper.scene}
        scale={[2.2, 2.2, 2.2]}
        position={[5.3, 12.6, -2.1]}
        rotation={[toRadians(10), -toRadians(76), -toRadians(15)]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
