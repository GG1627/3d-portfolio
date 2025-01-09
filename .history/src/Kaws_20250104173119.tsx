import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Kaws() {
  const kaws = useGLTF("/kaws.glb");

  // Enable shadows for all children in the model
  kaws.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={kaws.scene}
        scale={[22, 22, 22]}
        position={[-19.1, -1.5, -4.33]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
