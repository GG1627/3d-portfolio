import { useGLTF } from "@react-three/drei";

export default function LiverpoolLogo() {
  const liverpool = useGLTF("/liverpool_fc_logo.glb");

  return (
    <>
      <primitive
        object={liverpool.scene}
        scale={[5, 5, 5]}
        position={[-11, 6, -5]}
      ></primitive>
    </>
  );
}
