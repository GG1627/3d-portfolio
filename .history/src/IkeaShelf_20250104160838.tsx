import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function IkeaShelf() {
  const ikeaShelf = useGLTF("/ikea_shelf.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Enable shadows for all children in the model
  ikeaShelf.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={ikeaShelf.scene}
        scale={[12, 12, 12]}
        position={[18, -12, 0]}
        rotation={[0, -toRadians(90), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
