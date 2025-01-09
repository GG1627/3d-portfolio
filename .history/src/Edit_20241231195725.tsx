import { useEffect, useState } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas", isClicked);
    test.initialize();
    test.animate();

    // Load models into the scene
    if (test.scene) {
      loadOfficeDesk(test.scene);
    }
  }, [isClicked]);

  const handleButtonClick = () => {
    if (isClicked) {
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
