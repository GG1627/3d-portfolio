import { Canvas, useThree } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense, useEffect, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./App.css";
import * as THREE from "three";

function App() {
  // const { camera } = useThree(); // Access the camera from the scene

  const defaultPosition = new THREE.Vector3(-45, 28, 65); // Default camera position
  const targetPosition = new THREE.Vector3(0, 0, 9); // Target camera position
  const storedPosition = new THREE.Vector3();

  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(-45, 28, 65)
  ); // State to manage camera position

  const handleZoomButtonClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else if (isClicked) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      setCameraPosition(targetPosition); // Update camera position after button click
    } else if (!isClicked) {
      setCameraPosition(defaultPosition); // Update camera position after button click
    }
  }, [isClicked]); // Effect will run only when `isClicked` changes

  return (
    <>
      <button className="myButton" onClick={handleZoomButtonClick}>
        Hello
      </button>
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={cameraPosition.toArray()}
          fov={45}
        />
        <ambientLight intensity={2} />
        <directionalLight
          position={[-2, 6, 4]}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.005} // This can help to fix shadow artifacts
        />
        <OrbitControls
          minPolarAngle={Math.PI / 6} // Minimum polar angle (30 degrees)
          maxPolarAngle={Math.PI / 2} // Maximum polar angle (90 degrees)
          minAzimuthAngle={-Math.PI / 2} // Minimum azimuthal angle (-90 degrees)
          maxAzimuthAngle={Math.PI / 2} // Maximum azimuthal angle (90 degrees)
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Monitor />
          <mesh
            receiveShadow
            position={[0, -4, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh receiveShadow position={[0, 0, -5]} rotation={[0, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
