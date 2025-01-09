import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import "./Monitor.css";

export default function Monitor() {
  const monitor = useGLTF("/ultrawide_monitor.glb");

  return (
    <>
      <primitive object={monitor.scene} scale={[1, 1, 1]} position={[0, -1, 0]}>
        <Html
          className="monitorScreen"
          position={[-4, 2.5, 0.2]}
          transform
          distanceFactor={3}
        >
          {/* <iframe src="https://bruno-simon.com/" /> */}
        </Html>
      </primitive>
    </>
  );
}
