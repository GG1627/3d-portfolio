import { Canvas } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Monitor />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
