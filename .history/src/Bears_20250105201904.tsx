import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Bears() {
  const bears = useGLTF("/teddy_bears.glb");

  // Enable shadows for all children in the model
  bears.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={bears.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[2, 12.2, -1]}
      ></primitive>
    </>
  );
}
