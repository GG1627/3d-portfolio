import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Mouse() {
  const mouse = useGLTF("/mouse.glb");

  // Enable shadows for all children in the model
  mouse.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={mouse.scene}
        scale={[18, 18, 18]}
        position={[5.5, 1.3, 1.5]}
        rotation={[0, Math.PI / 15, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
