import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Jordan() {
  const jordan = useGLTF("/offwhite_jordan.glb");

  // Enable shadows for all children in the model
  jordan.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={jordan.scene}
        scale={[23, 23, 23]}
        position={[-19, 2.96, -4.4]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
