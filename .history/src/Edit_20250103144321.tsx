import { useEffect, useRef, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

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
    }
  }, []);

  useEffect(() => {
    if (editInitRef.current) {
      editInitRef.current.updateStates(isClicked, isLerping);
    }
  }, [isClicked, isLerping]);

  const handleButtonClick = () => {
    if (isClicked == true && isLerping == true) {
      setIsClicked(true);
      setIsLerping(false);
    } else if (isClicked == true && isLerping == false) {
      setIsClicked(false);
      setIsLerping(false);
    } else if (isClicked == false && isLerping == true) {
      setIsClicked(true);
      setIsLerping(false);
    } else if (isClicked == false && isLerping == false) {
      setIsClicked(true);
      setIsLerping(true);
      setTimeout(() => {
        setIsLerping(false); // Change to false after 1 second
        // console.log("Lerping stopped");
      }, 1000);
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
