import { useGLTF } from "@react-three/drei";

export default function Shelf() {
  const shelf = useGLTF("/wall_shelf.glb");

  return (
    <>
      <primitive
        object={shelf.scene}
        scale={[40, 20, 20]}
        position={[6, 4, -3.7]}
      />

      <primitive
        object={shelf.scene.clone()}
        scale={[40, 20, 20]}
        position={[-5, 9, -3.7]}
      />
    </>
  );
}