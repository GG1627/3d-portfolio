import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function NikeDunk() {
  const dunk = useGLTF("/nike_dunk.glb");

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
        scale={[13, 13, 13]}
        position={[-10, -5, 0]}
        rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
