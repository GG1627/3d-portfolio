import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import Stats from "three/examples/jsm/libs/stats.module.js";

interface EditInitProps {
  // No need for camera position management here, it's handled by OrbitControls
}

export const EditInit: React.FC<EditInitProps> = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!); // Camera reference
  const { camera } = useThree(); // Get camera from the scene

  // You can set the camera's initial position here
  useEffect(() => {
    if (cameraRef.current) {
      // Set the camera position directly
      cameraRef.current.position.set(50, 0, 200); // Set to any value you'd like
      console.log(cameraRef.current.position);
    }
  }, []);

  return (
    <>
      {/* Assign the camera to the PerspectiveCamera */}
      <perspectiveCamera ref={cameraRef} />
    </>
  );
};

// interface EditInitProps {
//   isClicked: boolean;
//   isLerping: boolean;
// }

// export const EditInit: React.FC<EditInitProps> = ({ isClicked, isLerping }) => {
//   const camera = useRef<THREE.PerspectiveCamera>(null!);
//   const [targetPosition] = useState(new THREE.Vector3(0, 20, 50)); // Zoom-in target position
//   const [storedPosition] = useState(new THREE.Vector3(-200, 100, 200)); // Initial camera position

//   const lerpSpeed = 0.03; // Adjust this value to make the transition faster or slower

//   // Change the camera position when the component mounts
//   useEffect(() => {
//     if (camera.current) {
//       // Set the initial position of the camera
//       console.log("um");
//       camera.current.position.set(0, 0, -40);
//       console.log(camera.current.position);
//     }
//   }, []);

//   useFrame(() => {
//     if (camera.current) {
//       // do nothing - allow free rotation
//       if (isClicked == false && isLerping == false) {
//         //   console.log("do nothing");
//         return;
//       }
//       // zooming into the screen
//       else if (isClicked == true && isLerping == true) {
//         //   console.log("zooming in");
//         // camera.current.position.lerp(targetPosition, lerpSpeed);
//       }
//       // zooming out and allow free rotation
//       else if (isClicked == false && isLerping == true) {
//         //   console.log("zooming out");
//         // camera.current.position.lerp(storedPosition, lerpSpeed);
//         return;
//       }
//       //r
//       else if (isClicked == true && isLerping == false) {
//         return;
//       }
//     }
//   });

//   return (
//     <>
//       <perspectiveCamera />
//     </>
//   );
// };

// export default class EditInit {
//   fov: number;
//   canvas: HTMLCanvasElement; // Now directly type canvas
//   scene: THREE.Scene | undefined;
//   stats: Stats | undefined;
//   camera: THREE.PerspectiveCamera | undefined;
//   controls: OrbitControls | undefined;
//   renderer: THREE.WebGLRenderer | undefined;
//   clock: THREE.Clock | undefined;
//   isClicked: boolean;
//   isLerping: boolean | undefined;
//   defaultPosition: THREE.Vector3; // To store the target position
//   targetPosition: THREE.Vector3; // To store the target position
//   storedPosition: THREE.Vector3; // Initial camera position
//   lerpSpeed: number; // Speed of lerping (transition speed)

//   constructor(
//     canvas: HTMLCanvasElement,
//     isClicked: boolean,
//     isLerping: boolean
//   ) {
//     this.fov = 45;
//     this.canvas = canvas;
//     this.isClicked = isClicked; // Set the prop value
//     this.isLerping = isLerping; // Initialize new boolean
//     this.lerpSpeed = 0.03; // Adjust this value to make the transition faster or slower

//     this.scene = undefined;
//     this.stats = undefined;
//     this.camera = undefined;
//     this.controls = undefined;
//     this.renderer = undefined;
//     this.clock = undefined;
//     this.defaultPosition = new THREE.Vector3(-80, 50, 110); // Initial camera position
//     this.storedPosition = new THREE.Vector3(); // Initial camera position
//     this.targetPosition = new THREE.Vector3(0, 20, 50); // Zoom-in target position
//   }

//   updateStates(isClicked: boolean, isLerping: boolean | undefined) {
//     if (isClicked && isLerping && this.camera) {
//       this.storedPosition.copy(this.camera.position);
//     }

//     this.isClicked = isClicked;
//     this.isLerping = isLerping;

//     // React to changes in state if necessary
//     console.log("Updated states:", {
//       isClicked,
//       isLerping,
//       previousPosition: this.storedPosition,
//     });
//   }

//   initialize() {
//     this.camera = new THREE.PerspectiveCamera(
//       this.fov,
//       window.innerWidth / window.innerHeight,
//       1,
//       1000
//     );

//     // this.camera.position.copy(this.defaultPosition);
//     this.camera.position.set(-80, 50, 110);
//     this.camera.lookAt(0, 0, 0);

//     this.clock = new THREE.Clock();
//     this.scene = new THREE.Scene();

//     // const canvas = document.getElementById(
//     //   this.canvasId
//     // ) as HTMLCanvasElement | null;
//     // if (!canvas) {
//     //   console.error("Canvas element not found");
//     //   return;
//     // }
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.canvas,
//       antialias: true,
//     });

//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     this.renderer.setClearColor(0xadd8e6); // Set background color to light blue
//     this.renderer.shadowMap.enabled = true; // Enable shadow maps
//     this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//     this.controls = new OrbitControls(this.camera, this.renderer.domElement);

//     this.stats = new Stats();
//     document.body.appendChild(this.stats.dom);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     ambientLight.intensity = 2.0;
//     this.scene.add(ambientLight);

//     const spotLight = new THREE.SpotLight(0xffffff, 1);
//     spotLight.castShadow = true;
//     spotLight.position.set(0, 44, 32);
//     spotLight.shadow.mapSize.width = 1024;
//     spotLight.shadow.mapSize.height = 1024;
//     spotLight.intensity = 5.0;
//     this.scene.add(spotLight);

//     // Add a plane to receive shadows
//     const planeGeometry = new THREE.PlaneGeometry(200, 200);
//     const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
//     const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
//     planeMesh.rotation.x = -Math.PI / 2;
//     planeMesh.position.y = -5;
//     planeMesh.receiveShadow = true; // Enable shadow receiving
//     this.scene.add(planeMesh);

//     window.addEventListener("resize", this.onWindowResize.bind(this));
//   }

//   animate() {
//     if (
//       !this.renderer ||
//       !this.scene ||
//       !this.camera ||
//       !this.stats ||
//       !this.controls
//     ) {
//       return;
//     }

//     window.requestAnimationFrame(this.animate.bind(this));
//     this.render();
//     this.stats.update();
//     this.controls.update();

//     // do nothing - allow free rotation
//     if (this.isClicked == false && this.isLerping == false) {
//       //   console.log("do nothing");
//       return;
//     }
//     // zooming into the screen
//     else if (this.isClicked == true && this.isLerping == true) {
//       //   console.log("zooming in");
//       this.camera.position.lerp(this.targetPosition, this.lerpSpeed);
//     }
//     // zooming out and allow free rotation
//     else if (this.isClicked == false && this.isLerping == true) {
//       //   console.log("zooming out");
//       this.camera.position.lerp(this.storedPosition, this.lerpSpeed);
//       return;
//     }
//     //r
//     else if (this.isClicked == true && this.isLerping == false) {
//       return;
//     }
//     //
//     // else if (){}
//   }

//   render() {
//     if (this.renderer && this.scene && this.camera) {
//       this.renderer.render(this.scene, this.camera);
//     }
//   }

//   onWindowResize() {
//     if (!this.camera || !this.renderer) return;

//     this.camera.aspect = window.innerWidth / window.innerHeight;
//     this.camera.updateProjectionMatrix();

//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//   }
// }
