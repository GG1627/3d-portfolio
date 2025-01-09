import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function PC() {
  const pc = useGLTF("/gaming_pc.glb");

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
        object={pc.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[-22.9, -0.1, 0]}

        // rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
