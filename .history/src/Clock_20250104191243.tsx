import { Html, useGLTF } from "@react-three/drei";
import "./Monitor.css";
import { Mesh } from "three";

export default function Clock() {
  const clock = useGLTF("/alarm_clock.glb");

  // Enable shadows for all children in the model
  clock.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true; // Enable shadow casting
      mesh.receiveShadow = true; // Enable shadow receiving
    }
  });

  return (
    <>
      <primitive
        object={clock.scene}
        scale={[3, 3, 3]}
        position={[-0.1, 0, -1.6]}
      >
        <Html
          className="clockScreen"
          position={[-5.18, 2.31, 0.2]}
          transform
          distanceFactor={3}
        >
          {/* <iframe src="https://flocus.com/online-flip-clock/" /> */}
        </Html>
      </primitive>
    </>
  );
}
