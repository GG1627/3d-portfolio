import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function TravisAF1() {
  const tAirForce = useGLTF("/travisAF1.glb");

  // Enable shadows for all children in the model
  tAirForce.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={tAirForce.scene}
        scale={[18, 18, 18]}
        position={[-21, 7.3, -4.28]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
