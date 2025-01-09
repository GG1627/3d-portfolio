import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Mustang() {
  const mustang = useGLTF("/mustang.glb");

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
        scale={[100, 100, 100]}
        position={[7.7, 12.17, -3.3]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
