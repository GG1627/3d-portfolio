import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Keyboard() {
  const keyboard = useGLTF("/mechanical_keyboard.glb");

  // Enable shadows for all children in the model
  keyboard.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={keyboard.scene}
        scale={[24, 24, 24]}
        position={[0, 1.45, 1.2]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
