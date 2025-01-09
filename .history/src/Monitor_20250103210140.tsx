import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import "./Monitor.css";
import { Mesh } from "three";

export default function Monitor() {
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
      <primitive object={monitor.scene} scale={[1, 1, 1]} position={[0, 0, 0]}>
        <Html
          className="monitorScreen"
          position={[-5.18, 2.31, 0.2]}
          transform
          distanceFactor={3}
        >
          {/* <iframe src="https://bruno-simon.com/" /> */}
        </Html>
      </primitive>
    </>
  );
}
