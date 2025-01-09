import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function RubiksCube() {
  const rubiks = useGLTF("/rubiks_cube.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Enable shadows for all children in the model
  rubiks.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={rubiks.scene}
        scale={[0.006, 0.006, 0.006]}
        position={[-16, 16.82, -3.1]}
        rotation={[0, toRadians(138), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
