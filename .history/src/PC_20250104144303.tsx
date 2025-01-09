import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function PC() {
  const pc = useGLTF("/untitled.glb");

  // Enable shadows for all children in the model
  pc.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={pc.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[-1.1, 4.9, -2]}
        // rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
