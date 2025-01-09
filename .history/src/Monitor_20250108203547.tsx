import { Html, useGLTF } from "@react-three/drei";
import "./Monitor.css";
import { Mesh } from "three";

function Monitor({ setHovered }: { setHovered: (hovered: boolean) => void }) {
  const monitor = useGLTF("/ultrawide_monitor.glb");

  // Enable shadows for all children in the model
  monitor.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={monitor.scene}
        scale={[1, 1.2, 1]}
        position={[-0.1, 5.8, -1.6]}
      >
        <Html
          className="monitorScreen"
          position={[-5.15, 2.3, 0.2]}
          transform
          distanceFactor={2}
        >
          <iframe
            src="https://2d-portfolio-tau.vercel.app/"
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          />
        </Html>
      </primitive>
    </>
  );
}

export default Monitor;
