import { useEffect } from "react";
import * as THREE from "three";
import EditInit from "./EditInit";

function Edit() {
  useEffect(() => {
    const test = new EditInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.castShadow = true; // Enable casting shadows

    if (test.scene) {
      test.scene.add(boxMesh);
    }
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default Edit;
