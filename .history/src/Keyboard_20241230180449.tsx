import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Keyboard() {
  const keyboard = useGLTF("/mechanical_keyboard.glb");

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
        object={keyboard.scene}
        scale={[25, 25, 25]}
        position={[5.8, -3.5, 4.5]}
        rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
