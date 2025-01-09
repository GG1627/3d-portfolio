import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function LiverpoolLogo() {
  const liverpool = useGLTF("/liverpool_fc_logo.glb");

  // Enable shadows for all children in the model
  liverpool.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={liverpool.scene}
        scale={[5, 5, 5]}
        position={[-13, 6, -5.2]}
      ></primitive>
    </>
  );
}
