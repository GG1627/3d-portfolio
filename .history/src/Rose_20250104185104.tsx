import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Rose() {
  const rose = useGLTF("/rose.glb");

  // Enable shadows for all children in the model
  //   rose.scene.traverse((child) => {
  //     if ((child as Mesh).isMesh) {
  //       const mesh = child as Mesh;
  //       mesh.castShadow = true; // Enable shadow casting
  //       mesh.receiveShadow = true; // Enable shadow receiving
  //     }
  //   });

  return (
    <>
      <primitive
        object={rose.scene}
        scale={[5, 5, 5]}
        position={[0, 13, -4]}
        rotation={[0, Math.PI / 5, Math.PI / 2.1]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}