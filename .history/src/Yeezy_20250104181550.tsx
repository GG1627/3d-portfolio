import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Yeezy() {
  const yeezy = useGLTF("/yeezy.glb");

  // Enable shadows for all children in the model
  yeezy.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={yeezy.scene}
        scale={[19, 19, 19]}
        position={[-21, -10.3, -4.33]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
