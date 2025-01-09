import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

function Edit() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;
  });

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default Edit;
