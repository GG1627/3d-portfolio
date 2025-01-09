import { useGLTF } from "@react-three/drei";

export default function Shelby() {
  const shelby = useGLTF("shelby_gt500.glb");

  return (
    <>
      <primitive
        object={shelby.scene}
        scale={[1, 1, 1]}
        position={[15, 12.17, -3.3]}
        rotation={[0, -Math.PI / 2.5, 0]} // Rotate 90 degrees around Y-axis
      ></primitive>
    </>
  );
}
