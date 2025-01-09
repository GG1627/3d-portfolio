import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Coffee() {
  const coffee = useGLTF("/coffee.glb");

  // Enable shadows for all children in the model
  coffee.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={coffee.scene}
        scale={[1.8, 1.8, 1.8]}
        position={[6.6, 1.3, -1]}
        rotation={[0, Math.PI / 5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
