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
        <PerspectiveCamera makeDefault position={[0, 3, 20]} fov={45} />
        <ambientLight intensity={2} />
        <OrbitControls
          minPolarAngle={Math.PI / 6} // Minimum polar angle (30 degrees)
          maxPolarAngle={Math.PI / 2} // Maximum polar angle (90 degrees)
          minAzimuthAngle={-Math.PI / 2} // Minimum azimuthal angle (-90 degrees)
          maxAzimuthAngle={Math.PI / 2} // Maximum azimuthal angle (90 degrees)
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Monitor />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -4, 0]}
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
