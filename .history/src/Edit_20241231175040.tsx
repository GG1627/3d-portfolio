import { useEffect } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { loadOfficeDesk } from "./Desk";

function Edit() {
  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // Load models into the scene
    if (test.scene) {
      loadOfficeDesk(test.scene);
    }
  }, []);

  return (
    <div className="table">
      <canvas id="myThreeJsCanvas" />
      <h1>TESTINGGGGGGGGGGGGGGGGG</h1>
    </div>
  );
}

export default Edit;
