import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function NikeDunk() {
  const dunk = useGLTF("/dunk.glb");

  // Enable shadows for all children in the model
  dunk.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={dunk.scene}
        scale={[13.9, 13.9, 13.9]}
        position={[-19, -5.99, -4.4]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}