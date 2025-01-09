import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function IPhone() {
  const phone = useGLTF("/iphone_13.glb");

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
        object={phone.scene}
        scale={[0.005, 0.005, 0.005]}
        position={[-8, -3.7, 7]}
        rotation={[(Math.PI * 3) / 2, 0, Math.PI / 25]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
