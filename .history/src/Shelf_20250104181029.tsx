import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Shelf() {
  const shelf = useGLTF("/wall_shelves.glb");

  // Enable shadows for all children in the model
  shelf.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={shelf.scene}
        scale={[18, 20, 20]}
        position={[6, 10, -3.1]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />

      <primitive
        object={shelf.scene.clone()}
        scale={[18, 20, 20]}
        position={[-5, 14, -3.1]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />
    </>
  );
}
