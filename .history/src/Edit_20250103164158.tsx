import { useEffect, useRef, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import { loadMonitor } from "./Monitor";
import "./Edit.css";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  const editInitRef = useRef<EditInit | null>(null); // Type the useRef properly

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas", isClicked, isLerping);
    editInitRef.current = test; // Save the instance for later updates

    test.initialize();
    test.animate();

    // Load models into the scene
    if (test.scene) {
      loadOfficeDesk(test.scene);
      loadMonitor(test.scene);
    }
  }, []);

  useEffect(() => {
    if (editInitRef.current) {
      editInitRef.current.updateStates(isClicked, isLerping);
    }
  }, [isClicked, isLerping]);

  const handleZoomButtonClick = () => {
    if (isClicked == true && isLerping == true) {
      setIsClicked(true);
      setIsLerping(false);
    } else if (isClicked == true && isLerping == false) {
      setIsClicked(false);
      setIsLerping(true);
      setTimeout(() => {
        setIsLerping(false); // Change to false after 1 second
        // console.log("Lerping stopped");
      }, 2000);
    } else if (isClicked == false && isLerping == true) {
      setIsClicked(true);
      setIsLerping(false);
    } else if (isClicked == false && isLerping == false) {
      setIsClicked(true);
      setIsLerping(true);
      setTimeout(() => {
        setIsLerping(false); // Change to false after 1 second
        // console.log("Lerping stopped");
      }, 2500);
    }
  };

  const handleResetButtonClick = () => {};

  return (
    <div className="table">
      <Canvas>
        {/* Render the monitor model and iframe */}
        <Html center position={[0, 0, 0.1]} distanceFactor={5} transform>
          <iframe
            src="https://bruno-simon.com/"
            style={{ width: "100%", height: "100%" }}
          />
        </Html>
      </Canvas>
      <button onClick={handleZoomButtonClick}>Zoom</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}

export default Edit;
