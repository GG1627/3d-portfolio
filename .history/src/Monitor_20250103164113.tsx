import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Html } from "@react-three/drei";

export function loadMonitor(scene: THREE.Scene) {
  const loader = new GLTFLoader();

  loader.load(
    "ultrawide_monitor.glb", // Replace with the path to your GLB model file
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1); // Adjust scale if necessary
      model.position.set(0, 0, 0); // Adjust position if necessary

      // Traverse the model to add shadows and other settings
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });

      // Add the model to the scene
      scene.add(model);

      return model; // Return the model for future use
    },
    (xhr) => {
      // console.log(`Monitor model: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("Error loading monitor model:", error);
    }
  );
}
