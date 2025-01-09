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
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <canvas id="myThreeJsCanvas" style={{ position: "absolute" }} />
      <button>Press ME</button>
    </div>
  );
}

export default Edit;
