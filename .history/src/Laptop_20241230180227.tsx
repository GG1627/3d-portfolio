import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Laptop() {
  const laptop = useGLTF("/macbook.glb");

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={100}
        minDistance={10}
        enabled={false}
      />
      <Environment preset="warehouse" />
      <primitive
        object={laptop.scene}
        scale={[0.16, 0.16, 0.16]}
        position={[12, -3.6, 5]}
        rotation={[0, -Math.PI / 5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
