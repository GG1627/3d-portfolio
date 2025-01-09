import { Html, useGLTF } from "@react-three/drei";
import "./Clock.css";
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
      <primitive object={clock.scene} scale={[1, 1, 1]} position={[0, 4, 0]}>
        <Html
          className="clockScreen"
          position={[-1.1, 1.8, -0.1]}
          transform
          distanceFactor={3}
        >
          <iframe src="https://flocus.com/online-flip-clock/" />
        </Html>
      </primitive>
    </>
  );
}
