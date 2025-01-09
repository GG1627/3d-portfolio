import { useGLTF } from "@react-three/drei";

export default function Shelf() {
  const shelf = useGLTF("/wall_shelves.glb");

  return (
    <>
      <primitive
        object={shelf.scene}
        scale={[40, 20, 10]}
        position={[6, 4, 0]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />

      <primitive
        object={shelf.scene.clone()}
        scale={[40, 20, 10]}
        position={[-5, 9, 0]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      />
    </>
  );
}
