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
  isClicked,
  defaultPosition,
  targetPosition,
  isLerping,
}: {
  storedPositionRef: React.RefObject<THREE.Vector3>;
  isClicked: boolean;
  defaultPosition: THREE.Vector3;
  targetPosition: THREE.Vector3;
  isLerping: boolean;
}) {
  const { camera } = useThree(); // Access the camera directly from the scene

  useFrame(() => {
    // console.log(camera.position);

    if (
      !isClicked &&
      !isLerping &&
      camera &&
      camera.position &&
      storedPositionRef.current
    ) {
      storedPositionRef.current.copy(camera.position); // Store the camera position continuously
    }
    // Make sure camera.position is not null before calling lerp
    if (camera && camera.position && storedPositionRef.current) {
      if (!isClicked && !isLerping) {
        // do nothing
        return;
      }
      // zoom in
      else if (isClicked && isLerping) {
        camera.position.lerp(targetPosition, 0.08);
      }
      // zoom out
      else if (!isClicked && isLerping) {
        console.log("not working?");
        camera.position.lerp(storedPositionRef.current, 0.08);
      }
      // else if (!isClicked && !isInDefaultPosition) {
      //   camera.position.lerp(defaultPosition, 0.03);
      //   // camera.position.lerp(storedPositionRef.current, 0.03);
      // }
    }
  });

  return null;
}

function App() {
  // const { camera } = useThree(); // Access the camera from the scene

  const defaultPosition = new THREE.Vector3(-45, 28, 65); // Default camera position
  const targetPosition = new THREE.Vector3(0, 0, 14); // Target camera position
  // const storedPosition = new THREE.Vector3(); // Target camera position

  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  const [cameraPosition, setCameraPosition] = useState(defaultPosition);

  const storedPositionRef = useRef(new THREE.Vector3());

  const handleZoomButtonClick = () => {
    if (!isClicked && !isLerping) {
      setIsClicked(true);
      setIsLerping(true);
      setTimeout(() => {
        setIsLerping(false); // Change to false after 1 second
        // console.log("Lerping stopped");
      }, 2600);
    } else if (isClicked && !isLerping) {
      setIsClicked(false);
      setIsLerping(true);
      setTimeout(() => {
        setIsLerping(false); // Change to false after 1 second
        // console.log("Lerping stopped");
      }, 2600);
    }
    // // rotated in other position
    // else if (!isClicked && !isLerping) {
    //   setIsClicked(true);
    //   setIsInDefaultPosition(false);
    // }
    // // zoomed in
    // else if (isClicked && !isInDefaultPosition) {
    //   setIsClicked(false);
    //   setIsInDefaultPosition(false);
    // }
  };

  return (
    <>
      <button className="myButton" onClick={handleZoomButtonClick}>
        Hello
      </button>
      <Canvas shadows>
        <CameraTracking
          storedPositionRef={storedPositionRef}
          isClicked={isClicked}
          defaultPosition={defaultPosition}
          targetPosition={targetPosition}
          isLerping={isLerping}
        />
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
