import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Mousepad() {
  const mousepad = useGLTF("/mousepad.glb");

  // Enable shadows for all children in the model
  mousepad.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={mousepad.scene}
        scale={[1.5, 1, 1]}
        position={[2.5, -4, 2]}
        // rotation={[0, Math.PI, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
