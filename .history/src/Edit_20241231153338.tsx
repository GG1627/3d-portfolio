import { useEffect } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Edit() {
  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // Load the GLB file
    const loader = new GLTFLoader();
    loader.load(
      "office_desk.glb", // Replace with the path to your .glb file
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(50, 50, 50); // Adjust scale as needed
        model.castShadow = true; // Enable shadows for the model
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        if (test.scene) {
          test.scene.add(model); // Add the model to the scene
        }
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default Edit;
