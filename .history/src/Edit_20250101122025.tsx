import { useEffect, useState } from "react";
import EditInit from "./EditInit";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

function Edit() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [editInit, setEditInit] = useState<EditInit | null>(null);

  useEffect(() => {
    const init = new EditInit("myThreeJsCanvas", isClicked);
    init.initialize();
    init.animate();
    setEditInit(init);

    // Load models into the scene
    if (init.scene) {
      loadOfficeDesk(init.scene);
    }
  }, []);

  useEffect(() => {
    if (editInit) {
      editInit.updateClickState(isClicked);
    }
  }, [isClicked, editInit]);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
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
