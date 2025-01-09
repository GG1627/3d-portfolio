import { Html, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Clock() {
  const clock = useGLTF("/alarm_clock.glb");

  // Enable shadows for all children in the model
  clock.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={clock.scene}
        scale={[1, 1, 1]}
        position={[3, 11.95, -2]}
      ></primitive>
    </>
  );
}
