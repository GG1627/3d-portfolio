import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Mustang2018() {
  const mustang = useGLTF("/2018_mustang.glb");

  // Enable shadows for all children in the model
  mustang.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={mustang.scene}
        scale={[2, 2, 2]}
        position={[0, 0, 0]}
        // rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
