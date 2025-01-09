import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function loadMonitor(scene: THREE.Scene) {
  const loader = new GLTFLoader();
  loader.load(
    "/ultrawide_monitor.glb",
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1); // Adjust scale as needed
      model.position.set(0, 9, 0); // Set position for the monitor
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
      scene.add(model);

      // Optionally add an HTML element for the monitor screen
      const screenHtml = document.createElement("div");
      screenHtml.style.position = "absolute";
      screenHtml.style.width = "800px"; // Adjust width as needed
      screenHtml.style.height = "400px"; // Adjust height as needed
      screenHtml.innerHTML = `<iframe src="https://bruno-simon.com/" </iframe>`;
      document.body.appendChild(screenHtml);
    },
    (xhr) => {
      console.log(`Monitor: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("Error loading monitor model:", error);
    }
  );
}
