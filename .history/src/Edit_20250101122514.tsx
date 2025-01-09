import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false);
  const editInstance = useRef<EditInit | null>(null);

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas", isClicked);
    editInstance.current = test;
    test.initialize();
    test.animate();

    if (test.scene) {
      loadOfficeDesk(test.scene);
    }
  }, []);

  const handleButtonClick = () => {
    if (editInstance.current) {
      const targetPosition = isClicked
        ? new THREE.Vector3(-80, 50, 110) // Original position
        : new THREE.Vector3(0, 20, 50); // Zoomed-in position
      editInstance.current.startLerp(targetPosition);
    }
    setIsClicked(!isClicked); // Toggle state
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
