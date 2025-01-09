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
    if (isClicked == true) {
      setIsClicked(false);
    } else if (isClicked == false) {
      setIsClicked(true);
    }
    if (isLerping == false) {
      setIsClicked(true);
    } else if (isLerping == true) {
      setIsClicked(false);
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
