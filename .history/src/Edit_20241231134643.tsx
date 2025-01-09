import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

function Edit() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera();
  });

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default Edit;
