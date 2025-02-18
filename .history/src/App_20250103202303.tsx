import { Canvas } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={2.0} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Monitor />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
