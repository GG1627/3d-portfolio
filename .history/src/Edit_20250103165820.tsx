import { useEffect, useRef, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import { loadMonitor } from "./Monitor";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  const editInitRef = useRef<EditInit | null>(null); // Type the useRef properly
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Ref to access canvas element

  useEffect(() => {
    if (canvasRef.current) {
      // Pass the canvas reference instead of canvasId string
      const test = new EditInit(canvasRef.current, isClicked, isLerping);
      editInitRef.current = test; // Save the instance for later updates

      test.initialize();
      test.animate();

      // Load models into the scene
      if (test.scene) {
        loadOfficeDesk(test.scene);
        loadMonitor(test.scene);
      }
    }
  }, []); // Run only once on component mount

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
      <canvas ref={canvasRef} />
      {/* Iframe */}
      <div className="iframe-container">
        <iframe
          src="https://your-iframe-source-url.com"
          title="Iframe Example"
          width="600"
          height="400"
        ></iframe>
      </div>
      <button onClick={handleZoomButtonClick}>Zoom</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}

export default Edit;
