import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import "./App.css";
import "./Monitor.css";
import * as THREE from "three";
import gsap from "gsap";
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
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { MdSunny, MdModeNight, MdVolumeOff, MdVolumeUp } from "react-icons/md";

function CameraTracking({
  storedPositionRef,
  isClicked,
  isHalfZoom,
  isFullZoom,
  isDefaultPosition,
  defaultPosition,
  wholeViewPosition,
  targetPosition,
  buttonText,
  setButtonText,
}: {
  storedPositionRef: React.RefObject<THREE.Vector3>;
  isClicked: boolean;
  isHalfZoom: boolean;
  isFullZoom: boolean;
  isDefaultPosition: boolean;
  buttonText: string;
  setButtonText: React.Dispatch<React.SetStateAction<string>>; // Define the type for setButtonText
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
        setButtonText("Zoom In");
        console.log("did anything happen here");
        camera.position.lerp(storedPositionRef.current, 0.08);
      }
      //
      else if (!isHalfZoom && isDefaultPosition && !isClicked) {
        setButtonText("Zoom In");
        return;
      }
      //
      else if (isFullZoom && !isDefaultPosition && !isHalfZoom) {
        console.log("ermm 1");
        camera.position.lerp(targetPosition, 0.08);
        camera.lookAt(0, 5, 0);
        setButtonText("Zoom Out");
      }
      //
      else if (isHalfZoom && !isFullZoom && !isDefaultPosition) {
        camera.position.lerp(wholeViewPosition, 0.08);
        camera.lookAt(0, 4, 0);
        setButtonText("Zoom Out");
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
  const [buttonText, setButtonText] = useState("Zoom In");

  const storedPositionRef = useRef(new THREE.Vector3());

  // loading screen elements
  const [counter, setCounter] = useState(0);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const [isDarkMode, setIsDarkMode] = useState(true); // Initially set to dark mode

  const [isPlaying, setIsPlaying] = useState(false); // State to track if sound is playing
  const audioRef = useRef<HTMLAudioElement | null>(null); // Correct typing for audioRef

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

  // Handle the button click to toggle the theme
  const handleLightButtonClick = () => {
    setIsDarkMode((prevState) => !prevState);
    // Toggle dark mode on body (or any root element)
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const handleAudioClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the sound if it's playing
      } else {
        audioRef.current.play(); // Play the sound if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the isPlaying state
    }
  };

  useEffect(() => {
    // Use setInterval to control the speed of counter updates
    const interval = setInterval(() => {
      if (counter < 100) {
        const increment = Math.floor(Math.random() * 8) + 1;
        setCounter((prevCounter) => {
          const newValue = prevCounter + increment;
          if (newValue >= 100) {
            setIsCounterFinished(true);
            return 100;
          }
          return newValue;
        });
      } else {
        clearInterval(interval); // Clear interval when counter reaches 100
      }
    }, Math.floor(Math.random() * 400) + 300); // Random interval between 300ms and 800ms

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [counter]);

  useEffect(() => {
    if (isCounterFinished) {
      setTimeout(() => {
        startAnimations();
      }, 700);
    }
  }, [isCounterFinished]);

  function startAnimations() {
    gsap.to(".counter", {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(".bar1", {
      duration: 2.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });
    gsap.to(".monitorScreen iframe", {
      opacity: 1, // Fade in the iframe
      visibility: "visible", // Make the iframe visible
      duration: 2.5, // Set the duration of the fade-in
    });
  }

  return (
    <>
      <h1 className="counter">{`${counter}%`}</h1>
      <div className="overlay1">
        {[...Array(10)].map((_, i) => (
          <div className="bar1" key={i}></div>
        ))}
      </div>

      <div className="info">
        <div
          className="name"
          style={{
            backgroundColor: isDarkMode ? "#000000" : "white",
            color: isDarkMode ? "#d9d9d9" : "#000000",
          }}
        >
          <h1>Gael Garcia</h1>
        </div>
        <div
          className="major"
          style={{
            backgroundColor: isDarkMode ? "#000000" : "white",
            color: isDarkMode ? "#d9d9d9" : "#000000",
          }}
        >
          <h1>Computer Engineer</h1>
        </div>
      </div>
      <div className="controls">
        <button
          onClick={handleButtonClick}
          className="myButton"
          style={{
            backgroundColor: isDarkMode ? "#000000" : "white",
            color: isDarkMode ? "#d9d9d9" : "#000000",
          }}
        >
          {buttonText}
        </button>

        <div className="lightAndSoundContainer">
          {/* Light Mode button */}
          <button
            onClick={handleLightButtonClick}
            className="mybutton2"
            style={{
              backgroundColor: isDarkMode ? "#000000" : "white",
              color: isDarkMode ? "#d9d9d9" : "#000000",
              border: 0,
              margin: 1,
            }}
          >
            {isDarkMode ? (
              <MdSunny size={20} color="#d9d9d9" />
            ) : (
              <MdModeNight size={20} color="black" />
            )}
          </button>

          {/* Sound button */}
          <button
            onClick={handleAudioClick}
            style={{
              backgroundColor: isDarkMode ? "#000000" : "white",
              color: isDarkMode ? "#d9d9d9" : "#000000",
              border: 0,
              margin: 3,
            }}
          >
            {isPlaying ? <MdVolumeOff size={20} /> : <MdVolumeUp size={20} />}
          </button>
        </div>

        {/* Audio element to load and play the sound */}
        <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      </div>

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
          buttonText={buttonText}
          setButtonText={setButtonText}
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
          minPolarAngle={toRadians(20)} // Minimum polar angle (30 degrees)
          maxPolarAngle={toRadians(90)} // Maximum polar angle (90 degrees)
          minAzimuthAngle={toRadians(-80)} // Minimum azimuthal angle (-90 degrees)
          maxAzimuthAngle={toRadians(45)} // Maximum azimuthal angle (90 degrees)
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
            <meshStandardMaterial color={isDarkMode ? "#1c1c1c" : "#adadad"} />
          </mesh>
          <mesh receiveShadow position={[0, 0, -5]} rotation={[0, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color={isDarkMode ? "#1c1c1c" : "#adadad"} />
          </mesh>
          <mesh
            receiveShadow
            position={[-80, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color={isDarkMode ? "#1c1c1c" : "#adadad"} />
          </mesh>
          <mesh
            receiveShadow
            position={[100, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color={isDarkMode ? "#1c1c1c" : "#adadad"} />
          </mesh>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <Stats />
    </>
  );
}

export default App;
