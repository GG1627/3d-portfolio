import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import "./App.css";
import * as THREE from "three";
import Monitor from "./Monitor";
import Desk from "./Desk";
import PC from "./PC";
import Keyboard from "./Keyboard";
import Laptop from "./Laptop";
import Chair from "./Chair";
import Mousepad from "./Mousepad";
import Mouse from "./Mouse";
import Coffee from "./Coffee";
import IPhone from "./IPhone";
import TrashBin from "./TrashBin";
import Yeezy from "./Yeezy";
import TravisAF1 from "./TravisAF1";
import NikeDunk from "./NikeDunk";
import Kaws from "./Kaws";
import Jordan from "./Jordan";
import Shelf from "./Shelf";
import Rose from "./Rose";
import Clock from "./Clock";
import Mustang from "./Mustang";
import Shelby from "./Shelby";
import RubiksCube from "./RubiksCube";
import Bears from "./Bears";
import Spiderman from "./Spiderman";
import FlipperZero from "./FlipperZero";
import LiverpoolLogo from "./LiverpoolLogo";
import WallShelves from "./WallShelves";
import WelcomeScreen from "./WelcomeScreen";

function CameraTracking({
  storedPositionRef,
  isClicked,
  isHalfZoom,
  isFullZoom,
  isDefaultPosition,
  defaultPosition,
  wholeViewPosition,
  targetPosition,
}: {
  storedPositionRef: React.RefObject<THREE.Vector3>;
  isClicked: boolean;
  isHalfZoom: boolean;
  isFullZoom: boolean;
  isDefaultPosition: boolean;
  defaultPosition: THREE.Vector3;
  targetPosition: THREE.Vector3;
  wholeViewPosition: THREE.Vector3;
}) {
  const { camera } = useThree(); // Access the camera directly from the scene

  useFrame(() => {
    if (
      !isHalfZoom &&
      !isFullZoom &&
      !isClicked &&
      camera &&
      camera.position &&
      storedPositionRef.current
    ) {
      storedPositionRef.current.copy(camera.position); // Store the camera position continuously
    }
    // Make sure camera.position is not null before calling lerp
    if (camera && camera.position && storedPositionRef.current) {
      camera.lookAt(-5, 3, 0);
      // do nothing
      if (!isHalfZoom && isDefaultPosition && isClicked) {
        console.log("did anything happen here");
        camera.position.lerp(storedPositionRef.current, 0.08);
      }
      //
      else if (!isHalfZoom && isDefaultPosition && !isClicked) {
        return;
      }
      //
      else if (isFullZoom && !isDefaultPosition && !isHalfZoom) {
        console.log("ermm 1");
        camera.position.lerp(targetPosition, 0.08);
        camera.lookAt(0, 5, 0);
      }
      //
      else if (isHalfZoom && !isFullZoom && !isDefaultPosition) {
        console.log("ermm 2");
        camera.position.lerp(wholeViewPosition, 0.08);
        camera.lookAt(0, 4, 0);
      }
    }
  });

  return null;
}

function App() {
  const defaultPosition = new THREE.Vector3(-55, 28, 50); // Default camera position
  const targetPosition = new THREE.Vector3(0, 5.3, 7); // Target camera position
  const wholeViewPosition = new THREE.Vector3(0, 7, 30); // Target camera position

  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isHalfZoom, setIsHalfZoom] = useState(false); // State to track button click
  const [isFullZoom, setIsFullZoom] = useState(false); // State to track button click
  const [isDefaultPosition, setIsDefaultPosition] = useState(true); // State to track button click

  const [isHovered, setHovered] = useState(false); // Track hover state

  const [cameraPosition, setCameraPosition] = useState(defaultPosition);

  const storedPositionRef = useRef(new THREE.Vector3());

  useEffect(() => {
    if (isHovered) {
      console.log("hovering over");
      setIsDefaultPosition(false);
      setIsFullZoom(true);
      setIsHalfZoom(false);
    }
    //
    else if (!isHovered && !isDefaultPosition) {
      console.log("not hovering over");
      setIsHalfZoom(true);
      setIsFullZoom(false);
    }
    //
    else if (!isHovered && isDefaultPosition) {
      console.log("default");
    }
  }, [isHovered]);

  const handleZoomClick = () => {
    if (isHalfZoom) {
      console.log("clickyyy");
      setIsHalfZoom(false);
      setIsDefaultPosition(true);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 2600);
    }
    if (isDefaultPosition) {
      // console.log("hellurrrrrrrr");
      // setIsDefaultPosition(false);
      // setIsFullZoom(false);
      // setIsHalfZoom(true);
    }
  };

  const handleButtonClick = () => {
    if (isDefaultPosition) {
      // console.log("hellurrrrrrrr");
      setIsDefaultPosition(false);
      setIsFullZoom(false);
      setIsHalfZoom(true);
    } else if (isHalfZoom) {
      // console.log("hellurrrrrrrr");
      setIsHalfZoom(false);
      setIsDefaultPosition(true);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 2600);
    }
  };

  return (
    <>
      <button onClick={handleButtonClick} className="myButton">
        Hello
      </button>
      <Canvas onClick={handleZoomClick} shadows>
        <CameraTracking
          storedPositionRef={storedPositionRef}
          isClicked={isClicked}
          isHalfZoom={isHalfZoom}
          isFullZoom={isFullZoom}
          isDefaultPosition={isDefaultPosition}
          defaultPosition={defaultPosition}
          targetPosition={targetPosition}
          wholeViewPosition={wholeViewPosition}
        />
        <PerspectiveCamera
          makeDefault
          position={cameraPosition.toArray()}
          fov={45}
        />
        <ambientLight intensity={0} />
        <directionalLight
          position={[-50, 20, 13]}
          intensity={4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          // shadow-bias={-0.005} // This can help to fix shadow artifacts
        />
        <OrbitControls
          minPolarAngle={Math.PI / 6} // Minimum polar angle (30 degrees)
          maxPolarAngle={Math.PI / 2} // Maximum polar angle (90 degrees)
          minAzimuthAngle={-Math.PI / 2} // Minimum azimuthal angle (-90 degrees)
          maxAzimuthAngle={Math.PI / 2} // Maximum azimuthal angle (90 degrees)
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Monitor setHovered={setHovered} />
          <Desk />
          <PC />
          <Keyboard />
          <Laptop />
          <Chair />
          <Mousepad />
          <Mouse />
          <Coffee />
          <IPhone />
          <TrashBin />
          <Yeezy />
          <TravisAF1 />
          <NikeDunk />
          <Kaws />
          <Jordan />
          <Shelf />
          <Rose />
          <Shelby />
          <Bears />
          <FlipperZero />
          <LiverpoolLogo />
          <WallShelves />
          <mesh
            receiveShadow
            position={[0, -11, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="black" />
          </mesh>
          <mesh receiveShadow position={[0, 0, -5]} rotation={[0, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <Stats />
      {/* <WelcomeScreen /> */}
    </>
  );
}

export default App;
