import { useEffect, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [isLerping, setIsLerping] = useState(false); // New state for lerping

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas", isClicked, isLerping);
    test.initialize();
    test.animate();

    // Load models into the scene
    if (test.scene) {
      loadOfficeDesk(test.scene);
    }
  }, [isClicked]);

  const handleButtonClick = () => {
    if (isClicked) {
      console.log("1st time click");
      setIsClicked(false);
    } else if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <div className="table">
      <canvas id="myThreeJsCanvas" />
      <button onClick={handleButtonClick}>Hello</button>
    </div>
  );
}

export default Edit;
