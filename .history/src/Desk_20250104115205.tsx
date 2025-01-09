import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Desk() {
  const desk = useGLTF("/homcom_computer_desk.glb");

  // Enable shadows for all children in the model
  desk.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={desk.scene}
        scale={[5, 5, 5]}
        position={[0, 0, 0]}
        // rotation={[0, -Math.PI / 5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
