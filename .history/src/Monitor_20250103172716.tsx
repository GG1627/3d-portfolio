import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // Import hooks
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function loadMonitor() {
  const { camera, scene } = useThree(); // Access camera from React Three Fiber context
  const iframeRef = useRef<HTMLIFrameElement>(null); // Ref to track iframe

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "ultrawide_monitor.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Adjust scale of the model
        model.position.set(-10, -5, -5); // Position of the model

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        // Create a screen mesh to act as the monitor's screen
        const screenGeometry = new THREE.PlaneGeometry(10, 5); // Adjust size
        const screenMaterial = new THREE.MeshBasicMaterial({
          color: 0x000000,
          side: THREE.DoubleSide,
        });
        const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);

        screenMesh.position.set(0, 1.5, 1.1); // Position slightly in front of the monitor
        model.add(screenMesh);

        // Add the monitor model to the scene
        scene.add(model);

        // Create iframe
        const iframe = document.createElement("iframe");
        iframe.src = "https://bruno-simon.com/"; // Example URL
        iframe.width = "600";
        iframe.height = "300";
        iframe.style.position = "absolute";
        iframe.style.border = "none";
        iframe.style.pointerEvents = "none"; // To ensure interaction is not blocked
        iframe.style.zIndex = "10"; // Ensure it appears above the 3D canvas
        document.body.appendChild(iframe);
        // iframeRef.current = iframe; // Set iframeRef to track the iframe

        // Function to update the iframe position based on the 3D scene
        const updateIframePosition = () => {
          const vector = new THREE.Vector3();
          screenMesh.getWorldPosition(vector); // Get the screen's world position
          const screenPosition = vector.project(camera); // Project to 2D space

          const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;

          if (iframeRef.current) {
            iframeRef.current.style.left = `${
              x - parseInt(iframe.width) / 2
            }px`;
            iframeRef.current.style.top = `${
              y - parseInt(iframe.height) / 2
            }px`;
          }
        };

        // Update iframe position continuously on each frame
        const onRender = () => {
          updateIframePosition();
          requestAnimationFrame(onRender); // Keep updating the position
        };

        onRender(); // Start the render loop for updating the iframe position
      },
      (xhr) => {
        // Optionally log progress
        // console.log(`Monitor loaded: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading monitor model:", error);
      }
    );
  }, [camera]); // Dependency array to re-run the effect when camera changes

  return null; // No JSX, as we don't render any directly in this component
}
