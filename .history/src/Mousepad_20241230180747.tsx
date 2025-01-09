import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Mousepad() {
  const mousepad = useGLTF("/mousepad.glb");

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
        object={mousepad.scene}
        scale={[1.5, 1, 1]}
        position={[2.5, -8.95, 5]}

        // rotation={[0, Math.PI, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
