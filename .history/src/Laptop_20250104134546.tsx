import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Laptop() {
  const laptop = useGLTF("/macbook.glb");

  // Enable shadows for all children in the model
  laptop.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={laptop.scene}
        scale={[0.16, 0.16, 0.16]}
        position={[12, -3.6, 5]}
        rotation={[0, -Math.PI / 5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
