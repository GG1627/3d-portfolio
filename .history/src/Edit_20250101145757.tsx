import { useEffect, useState } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas", isClicked, isLerping);
    test.initialize();
    test.animate();

    if (test.scene) {
      loadOfficeDesk(test.scene);
    }

    if (isLerping) {
      const lerpTimeout = setTimeout(() => setIsLerping(false), 1000); // Stop lerping after 1 second
      return () => clearTimeout(lerpTimeout);
    }
  }, [isClicked, isLerping]);

  const handleButtonClick = () => {
    setIsClicked(!isClicked); // Toggle clicked state
    setIsLerping(true); // Enable lerping
  };

  return (
    <div className="table">
      <canvas id="myThreeJsCanvas" />
      <button onClick={handleButtonClick}>
        {isClicked ? "Zoom Out" : "Zoom In"}
      </button>
    </div>
  );
}

export default Edit;
