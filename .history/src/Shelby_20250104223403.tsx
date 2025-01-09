import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Shelby() {
  const shelby = useGLTF("shelby_gt500.glb");

  // Enable shadows for all children in the model
  shelby.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={shelby.scene}
        scale={[1, 1, 1]}
        position={[15, 12.17, -4]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
