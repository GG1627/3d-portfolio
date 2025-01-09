import { useEffect } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { loadOfficeDesk } from "./Desk";
import "./Edit.css";

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

  const handleZoomIn = () => {
    // New target coordinates for the camera
    const targetPosition = new THREE.Vector3(0, 10, 30); // Example coordinates (x, y, z)

    // Zoom in the camera smoothly
    if (test.camera) {
      const animationDuration = 2; // seconds
      const startPosition = test.camera.position.clone();
      const distance = targetPosition.clone().sub(startPosition);
      let startTime: number;

      const animateZoom = (time: number) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / (animationDuration * 1000); // Normalize time

        if (progress < 1) {
          test.camera.position.add(distance.clone().multiplyScalar(progress));
          requestAnimationFrame(animateZoom);
        } else {
          test.camera.position.copy(targetPosition); // Ensure final position is exactly the target
        }
      };

      requestAnimationFrame(animateZoom);
    }
  };

  return (
    <div className="table">
      <canvas id="myThreeJsCanvas" />
      <button>Hello</button>
    </div>
  );
}

export default Edit;
