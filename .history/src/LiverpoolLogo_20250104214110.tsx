import { useGLTF } from "@react-three/drei";

export default function LiverpoolLogo() {
  const liverpool = useGLTF("/liverpool_fc_logo.glb");

  return (
    <>
      <primitive
        object={liverpool.scene}
        scale={[5, 5, 5]}
        position={[-10, 0, -5]}
      ></primitive>
    </>
  );
}
