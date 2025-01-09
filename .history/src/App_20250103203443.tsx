import { Canvas } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={50} />
        <ambientLight intensity={10} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Monitor />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
    </>
  );
}

export default App;
