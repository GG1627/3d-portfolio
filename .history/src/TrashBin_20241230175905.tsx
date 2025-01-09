import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function TrashBin() {
  const trash = useGLTF("/trash_bin.glb");

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
        object={trash.scene}
        scale={[4, 5.2, 4]}
        position={[-25, -11.63, 5]}
        rotation={[0, -Math.PI / 2.2, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
