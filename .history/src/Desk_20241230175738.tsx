import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Desk() {
  const desk = useGLTF("/office_desk.glb");

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
        object={desk.scene}
        scale={[114.6, 90, 110]}
        position={[-21, -20.45, -5]}

        // rotation={[0, -Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
