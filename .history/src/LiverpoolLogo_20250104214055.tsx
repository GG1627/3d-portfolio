import { useGLTF } from "@react-three/drei";

export default function LiverpoolLogo() {
  const liverpool = useGLTF("/liverpool_fc_logo.glb");

  return (
    <>
      <primitive
        object={liverpool.scene}
        scale={[6, 6, 6]}
        position={[0, 0, 0]}
      ></primitive>
    </>
  );
}
