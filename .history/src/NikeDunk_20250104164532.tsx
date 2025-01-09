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
        scale={[5, 5, 5]}
        position={[5.9, 1.29, 1.5]}
        rotation={[0, Math.PI / 15, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
