import { Html } from "@react-three/drei"; // Import Html for rendering in 3D space

export default function IframeRenderer() {
  return (
    <Html position={[0, 0, 0]} transform>
      <iframe src="https://bruno-simon.com/" />
    </Html>
  );
}
