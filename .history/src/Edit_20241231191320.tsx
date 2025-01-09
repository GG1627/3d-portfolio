import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { loadOfficeDesk } from "./Desk";

function Edit() {
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(-80, 50, 50)
  );
  const editInitRef = useRef<EditInit | null>(null); // Use useRef to store the EditInit instance

  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas");
    editInitRef.current = test; // Store the instance in the ref
    test.initialize();
    test.animate();

    // Load models into the scene
    if (test.scene) {
      loadOfficeDesk(test.scene);
    }
  }, []);

  const handleZoomIn = () => {
    const test = editInitRef.current; // Access the EditInit instance from the ref

    if (!test || !test.camera) return;

    // New target coordinates for the camera
    const targetPosition = new THREE.Vector3(0, 10, 30); // Example coordinates (x, y, z)

    // Zoom in the camera smoothly
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
  };

  return (
    <div className="table">
      <canvas id="myThreeJsCanvas" />
      <button onClick={handleZoomIn}>Zoom In</button>
    </div>
  );
}

export default Edit;
