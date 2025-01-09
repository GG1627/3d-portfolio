import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Chair() {
  const chair = useGLTF("/office_chair.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Enable shadows for all children in the model
  chair.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={chair.scene}
        scale={[12, 12, 12]}
        position={[2, -10, 12]}
        rotation={[0, toRadians(235), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
