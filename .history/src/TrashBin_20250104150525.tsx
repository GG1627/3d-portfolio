import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function TrashBin() {
  const trash = useGLTF("/trash_bin.glb");

  // Enable shadows for all children in the model
  trash.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={trash.scene}
        scale={[2, 2, 2]}
        position={[-18, -11, 1]}
        rotation={[0, -Math.PI / 2.2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
