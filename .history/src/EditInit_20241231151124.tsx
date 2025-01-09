import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
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

  constructor(canvasId: string) {
    this.fov = 45;
    this.canvasId = canvasId;

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
    this.camera.position.z = 96;

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
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    this.scene.add(spotLight);

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
