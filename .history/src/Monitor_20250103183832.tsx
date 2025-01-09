import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import "./Monitor.css";

export default function Monitor() {
  const monitor = useGLTF("/ultrawide_monitor.glb");

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        maxDistance={100}
        minDistance={10}
        enabled={true}
      />
      <Environment preset="warehouse" />
      <primitive
        object={monitor.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[0, 1.2, 0]}
      >
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
