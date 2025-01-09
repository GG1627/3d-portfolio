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

function App() {
  const [zoom, setZoom] = useState<number>(45);
  const [targetPosition, setTargetPosition] = useState<Vector3>(
    new Vector3(0, 50, 90)
  );
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(false);

  const defaultPosition = new Vector3(-60, 50, 90);
  // const zoomedInPosition = new Vector3(0, 10, 80);

  const handleScreenZoom = () => {
    if (!isZoomedIn) {
      setZoom(8);
      // setTargetPosition(zoomedInPosition);
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
        camera={{
          fov: zoom,
          near: 0.1,
          far: 8000,
        }}
      >
        <SmoothZoom zoom={zoom} targetPosition={targetPosition} />
        <SceneContents />
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
