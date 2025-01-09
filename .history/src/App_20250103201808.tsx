import { Canvas } from "@react-three/fiber";
import Monitor from "./Monitor";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <Monitor />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
