// IframeRenderer.tsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber"; // This hook will help us animate
import { Html } from "@react-three/drei"; // Import Html for rendering in 3D space

export default function IframeRenderer() {
  const iframeRef = useRef<any>(null);

  useFrame(() => {
    if (iframeRef.current) {
      // Example of animating iframe's rotation or position in the 3D space
      iframeRef.current.rotation.y += 0.01; // Rotate iframe for effect
    }
  });

  return (
    <Html position={[0, 0, 0]} ref={iframeRef} transform>
      <iframe src="https://bruno-simon.com/" />
    </Html>
  );
}
