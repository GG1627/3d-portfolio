import {
  Environment,
  Html,
  OrbitControls,
  PresentationControls,
  useCamera,
  useGLTF,
} from "@react-three/drei";
import "./Monitor.css";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Monitor() {
  const monitor = useGLTF("/ultrawide_monitor.glb");
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        maxDistance={100}
        minDistance={10}
        enabled={true}
      />
      <Environment preset="warehouse" />
      <primitive
        object={monitor.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[0, 1.2, 0]}
      >
        <Html
          className="monitorScreen"
          position={[-1, 2.5, 0.2]}
          transform
          distanceFactor={3}
        >
          <iframe src="https://bruno-simon.com/" />
        </Html>
      </primitive>
    </>
  );
}
