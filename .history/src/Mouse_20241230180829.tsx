import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Mouse() {
  const mouse = useGLTF("/mouse.glb");

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
        object={mouse.scene}
        scale={[18, 18, 18]}
        position={[5.5, -3.8, 4.5]}
        rotation={[0, Math.PI / 15, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
