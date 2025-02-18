import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function IPhone() {
  const phone = useGLTF("/iphone_13.glb");

  // Enable shadows for all children in the model
  phone.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={phone.scene}
        scale={[0.005, 0.005, 0.005]}
        position={[0, 1.1, 10]}
        rotation={[(Math.PI * 3) / 2, 0, Math.PI / 25]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
