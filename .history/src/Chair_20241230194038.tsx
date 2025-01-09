import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Chair() {
  const chair = useGLTF("/office_chair.glb");
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

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
        object={chair.scene}
        scale={[17, 17, 17]}
        position={[6, -20.4, 21]}
        rotation={[0, toRadians(235), 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
