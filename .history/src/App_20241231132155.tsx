import { Canvas, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import "./App.css";
import Monitor from "./Monitor";
import Desk from "./Desk";
import Keyboard from "./Keyboard";
import PC from "./PC";
import Mouse from "./Mouse";
import Mousepad from "./Mousepad";
import Laptop from "./Laptop";
import IPhone from "./IPhone";
import Shelf from "./Shelf";
import Coffee from "./Coffee";
import Lamp from "./Lamp";
import HousePlant from "./Plant";
import TrashBin from "./TrashBin";
import Chair from "./Chair";
import { PerspectiveCamera } from "three";
import { Plane } from "@react-three/drei";

function App() {
  const [zoom, setZoom] = useState<number>(45);
  const [targetPosition, setTargetPosition] = useState<Vector3>(
    new Vector3(-60, 50, 90)
  );
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(false);

  const defaultPosition = new Vector3(-60, 50, 90);
  const zoomedInPosition = new Vector3(0, 50, 80);

  const handleScreenZoom = () => {
    if (!isZoomedIn) {
      setZoom(8);
      setTargetPosition(zoomedInPosition);
      setIsZoomedIn(true);
    } else {
      setZoom(45);
      setTargetPosition(defaultPosition);
      setIsZoomedIn(false);
    }
  };

  return (
    <div className="mainWindow">
      <Canvas
        shadows
        camera={{
          fov: zoom,
          near: 0.1,
          far: 8000,
        }}
      >
        <SmoothZoom zoom={zoom} targetPosition={targetPosition} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={500}
        />
        <SceneContents />
        <Plane
          args={[500, 500]}
          rotation={[-Math.PI / 2, 0, 0]} // Rotate to lie flat
          position={[0, -22, 0]} // Adjust to be under your scene
          receiveShadow // Make the plane receive shadows
        >
          <meshStandardMaterial color="lightgray" />
        </Plane>
      </Canvas>
      <div className="overlay">
        <button onClick={handleScreenZoom}>HELLO</button>
      </div>
    </div>
  );
}

type SmoothZoomProps = {
  zoom: number;
  targetPosition: Vector3;
};

function SmoothZoom({ zoom, targetPosition }: SmoothZoomProps) {
  const { camera, scene } = useThree();

  useEffect(() => {
    const perspectiveCamera = camera as PerspectiveCamera;
    const initialFov = perspectiveCamera.fov;
    const initialPosition = new Vector3().copy(camera.position);
    const duration = 1500;
    const startTime = performance.now();

    const animateCamera = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      perspectiveCamera.fov = initialFov + (zoom - initialFov) * progress;

      camera.position.lerpVectors(initialPosition, targetPosition, progress);

      camera.lookAt(20, 20, 20);

      perspectiveCamera.updateProjectionMatrix();

      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };

    requestAnimationFrame(animateCamera);
  }, [zoom, targetPosition, camera, scene]);

  return null;
}

function SceneContents() {
  return (
    <>
      <Monitor />
      <Desk />
      <Keyboard />
      <PC />
      <Mouse />
      <Mousepad />
      <Laptop />
      <IPhone />
      <Shelf />
      <Coffee />
      <Lamp />
      <HousePlant />
      <TrashBin />
      <Chair />
    </>
  );
}

export default App;
