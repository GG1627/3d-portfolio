import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Spiderman() {
  const spiderman = useGLTF("/spiderman.glb");

  // Enable shadows for all children in the model
  spiderman.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={spiderman.scene}
        scale={[1, 1, 1]}
        position={[-12, 16.12, -2.3]}
      ></primitive>
    </>
  );
}
