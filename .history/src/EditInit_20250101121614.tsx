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
  isZoomedIn: boolean; // Track zoom state
  zoomInPosition: THREE.Vector3; // Zoom-in target position
  zoomOutPosition: THREE.Vector3; // Default camera position
  lerpSpeed: number; // Speed of lerping (transition speed)

  constructor(canvasId: string, isClicked: boolean) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.isZoomedIn = false; // Initially, camera is not zoomed in
    this.lerpSpeed = 0.03;

    this.zoomInPosition = new THREE.Vector3(0, 20, 50); // Zoom-in target position
    this.zoomOutPosition = new THREE.Vector3(-80, 50, 110); // Default camera position

    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
    this.clock = undefined;
  }

  initialize() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    this.camera.position.copy(this.zoomOutPosition);
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
    this.renderer.shadowMap.enabled = true;
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
    planeMesh.receiveShadow = true;
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

    // Smoothly transition between positions if zoom state changes
    const targetPosition = this.isZoomedIn
      ? this.zoomInPosition
      : this.zoomOutPosition;

    if (this.camera) {
      this.camera.position.lerp(targetPosition, this.lerpSpeed);
    }
  }

  toggleZoom() {
    // Toggle zoom state
    this.isZoomedIn = !this.isZoomedIn;
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
