import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

export default class EditInit {
  fov: number;
  canvasId: string;
  scene: THREE.Scene | undefined;
  stats: Stats | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  controls: OrbitControls | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  clock: THREE.Clock | undefined;
  isClicked: boolean;
  isLerping: boolean | undefined;
  targetPosition: THREE.Vector3; // To store the target position
  defaultPosition: THREE.Vector3; // Initial camera position
  lerpSpeed: number; // Speed of lerping (transition speed)

  constructor(canvasId: string, isClicked: boolean, isLerping: boolean) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.isClicked = isClicked; // Set the prop value
    this.isLerping = isLerping; // Initialize new boolean
    this.lerpSpeed = 0.03; // Adjust this value to make the transition faster or slower

    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
    this.clock = undefined;
    this.defaultPosition = new THREE.Vector3(-80, 50, 110); // Initial camera position
    this.targetPosition = new THREE.Vector3(0, 20, 50); // Zoom-in target position
  }

  updateStates(isClicked: boolean, isLerping: boolean | undefined) {
    this.isClicked = isClicked;
    this.isLerping = isLerping;

    // React to changes in state if necessary
    console.log("Updated states:", { isClicked, isLerping });
  }

  initialize() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    // this.camera.position.copy(this.defaultPosition);
    this.camera.position.set(-80, 50, 110);
    this.camera.lookAt(0, 0, 0);

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();

    const canvas = document.getElementById(
      this.canvasId
    ) as HTMLCanvasElement | null;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xadd8e6); // Set background color to light blue
    this.renderer.shadowMap.enabled = true; // Enable shadow maps
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.intensity = 2.0;
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 44, 32);
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.intensity = 5.0;
    this.scene.add(spotLight);

    // Add a plane to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.rotation.x = -Math.PI / 2;
    planeMesh.position.y = 0;
    planeMesh.receiveShadow = true; // Enable shadow receiving
    this.scene.add(planeMesh);

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  animate() {
    if (
      !this.renderer ||
      !this.scene ||
      !this.camera ||
      !this.stats ||
      !this.controls
    ) {
      return;
    }

    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();

    if (this.isClicked == true) {
      console.log("YUHHHHHHHH");
      this.camera.position.lerp(this.targetPosition, this.lerpSpeed);
    }
    if (this.isClicked == false) {
      //   console.log("did this click");
      this.camera.position.lerp(this.defaultPosition, this.lerpSpeed);
    }
  }

  render() {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
