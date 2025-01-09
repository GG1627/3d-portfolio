import { Canvas } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
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
