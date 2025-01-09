import { useGLTF } from "@react-three/drei";

export default function Shelf() {
  const shelf = useGLTF("/wall_shelves.glb");

  return (
    <>
      <primitive
        object={shelf.scene}
        scale={[18, 20, 20]}
        position={[6, 10, -3.1]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />

      <primitive
        object={shelf.scene.clone()}
        scale={[18, 20, 20]}
        position={[-5, 14, 0]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />
    </>
  );
}
