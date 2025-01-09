import { useEffect, useRef, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import loadMonitor from "./Monitor";
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

  //   const handleResetButtonClick = () => {};

  return (
    <div className="table">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 44, 32]} angle={0.15} penumbra={1} />

        <Stats />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />

        <Environment preset="warehouse" />

        {/* Add your models */}
        {/* <OfficeDesk isClicked={isClicked} isLerping={isLerping} /> */}
        {/* <Monitor isClicked={isClicked} isLerping={isLerping} /> */}
      </Canvas>

      <button onClick={handleZoomButtonClick}>Zoom</button>
      <button>Reset</button>
    </div>
  );
}

export default Edit;
