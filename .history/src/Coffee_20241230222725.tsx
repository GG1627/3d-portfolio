import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Coffee() {
  const coffee = useGLTF("/coffee.glb");

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
        object={coffee.scene}
        scale={[1.8, 1.8, 1.8]}
        position={[-8, -3.6, 2]}
        rotation={[0, Math.PI / 5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
