import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function loadOfficeDesk(scene: THREE.Scene) {
  const loader = new GLTFLoader();
  loader.load(
    "office_desk.glb",
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(50, 50, 50);
      model.position.set(10, 0, -5); // Adjust x, y, and z as needed
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
      scene.add(model);
    },
    (xhr) => {
      // console.log(`Office desk: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("Error loading office desk model:", error);
    }
  );
}
