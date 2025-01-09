import { useEffect, useRef, useState } from "react";
import { EditInit } from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import Monitor from "./Monitor";
import "./Edit.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stats } from "@react-three/drei";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

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

  return (
    <div className="mainWindow">
      <Canvas>
        <ambientLight intensity={2} />
        <spotLight intensity={5} position={[0, 44, 32]} castShadow />
        {/* Use EditInit component inside the Canvas */}
        <EditInit isClicked={isClicked} isLerping={isLerping} />
        <Environment preset="warehouse" />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        <Monitor />
      </Canvas>
      <button onClick={handleZoomButtonClick}>Zoom</button>
    </div>
  );
}

export default Edit;
