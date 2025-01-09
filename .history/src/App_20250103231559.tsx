import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./App.css";
import * as THREE from "three";

function CameraTracking({
  storedPositionRef,
}: {
  storedPositionRef: React.RefObject<THREE.Vector3>;
}) {
  const { camera } = useThree(); // Access the camera directly from the scene
  const storedPosition = useRef(new THREE.Vector3()); // To store the current camera position

  // Track camera position on every frame
  useFrame(() => {
    if (camera && storedPositionRef.current) {
      storedPositionRef.current.copy(camera.position); // Store the camera position continuously
      // console.log(storedPosition.current); // Log the position every frame
    }
  });

  return null;
}

function App() {
  // const { camera } = useThree(); // Access the camera from the scene

  const defaultPosition = new THREE.Vector3(-45, 28, 65); // Default camera position
  const targetPosition = new THREE.Vector3(0, 0, 9); // Target camera position
  // const storedPosition = new THREE.Vector3(); // Target camera position

  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isInDefaultPosition, setIsInDefaultPosition] = useState(true); // New state for lerping

  const [cameraPosition, setCameraPosition] = useState(defaultPosition);

  const storedPositionRef = useRef(new THREE.Vector3());

  const handleZoomButtonClick = () => {
    // default loaded screen
    if (!isClicked && isInDefaultPosition) {
      setIsClicked(true);
      setIsInDefaultPosition(false);
    } else if (!isClicked && !isInDefaultPosition) {
      setIsInDefaultPosition(false);
    } else if (isClicked && !isLerping) {
      setIsClicked(false);
      setIsLerping(false);
      setTimeout(() => {
        setIsLerping(true);
      }, 1000);
    } else if (isClicked && isLerping) {
      // setIsClicked(true);
    }
  };

  useEffect(() => {
    console.log(isClicked, isLerping);

    if (!isClicked && !isLerping) {
      setCameraPosition(defaultPosition);
      console.log("first");
    } else if (isClicked && !isLerping) {
      setCameraPosition(targetPosition);
      console.log("second");
    } else if (!isClicked && isLerping) {
      setCameraPosition(storedPositionRef.current);
      console.log("third");
    } else if (isClicked && isLerping) {
      console.log("fourth");
    }
  }, [isClicked]);

  return (
    <>
      <button className="myButton" onClick={handleZoomButtonClick}>
        Hello
      </button>
      <Canvas shadows>
        <CameraTracking storedPositionRef={storedPositionRef} />
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
