import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import Header from "./Header";

import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      <Header />
      <Canvas flat camera={{ fov: 25 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
