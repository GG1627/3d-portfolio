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
      console.log("making bool false");
      setIsClicked(false);
    } else if (!isClicked) {
      console.log("making bool true");
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