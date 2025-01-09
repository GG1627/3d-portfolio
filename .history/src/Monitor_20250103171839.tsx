import * as THREE from "three";
import { useThree } from "@react-three/fiber"; // Import useThree hook
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function loadOfficeDesk(scene: THREE.Scene) {
  const loader = new GLTFLoader();

  loader.load(
    "ultrawide_monitor.glb",
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(50, 50, 50);
      model.position.set(-10, -5, -5); // Adjust x, y, and z as needed

      // Traverse the model to find meshes and enable shadows
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });

      // Create a screen geometry to act as the monitor screen
      const screenGeometry = new THREE.PlaneGeometry(10, 5); // Adjust dimensions
      const screenMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
      });
      const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);

      // Position the screen mesh in front of the monitor model
      screenMesh.position.set(0, 1.5, 1.1); // Position slightly in front of the monitor

      // Add the screen mesh to the monitor model
      model.add(screenMesh);

      // Add the monitor model to the scene
      scene.add(model);

      // Access the camera from the React Three Fiber context
      const { camera } = useThree(); // This is the correct way to access the camera in React Three Fiber

      // Create iframe and position it in the DOM (not in 3D space)
      const iframe = document.createElement("iframe");
      iframe.src = "https://bruno-simon.com/"; // Example URL for iframe content
      iframe.width = "600";
      iframe.height = "300";
      iframe.style.position = "absolute";
      iframe.style.border = "none";
      iframe.style.pointerEvents = "none"; // Make sure it's not interactive
      iframe.style.zIndex = "10"; // Ensure it renders above the canvas
      document.body.appendChild(iframe);

      // Sync the iframe position based on the 3D model's screen position
      const updateIframePosition = () => {
        const vector = new THREE.Vector3();
        screenMesh.getWorldPosition(vector); // Get screen position in world space
        const screenPosition = vector.project(camera); // Project to 2D screen space using the camera

        // Map the 3D screen position to the 2D DOM space (viewport coordinates)
        const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;

        // Update iframe's position to match the 3D screen's position
        // Assuming x and y are numeric values
        iframe.style.left = `${x - parseInt(iframe.width) / 2}px`;
        iframe.style.top = `${y - parseInt(iframe.height) / 2}px`;
      };

      // Continuously update iframe position on each frame
      const onRender = () => {
        updateIframePosition();
        requestAnimationFrame(onRender); // Continue rendering
      };

      onRender(); // Start the render loop
    },
    (xhr) => {
      // console.log(`Office desk: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("Error loading office desk model:", error);
    }
  );
}
