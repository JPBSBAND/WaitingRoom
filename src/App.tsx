import {
  ContactShadows,
  OrbitControls,
  FlyControls,
  FirstPersonControls,
  Environment,
  BakeShadows,
  softShadows,
  PositionalAudio,
} from "@react-three/drei";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import "./App.css";
import { useControls, folder, Leva } from "leva";
import { Jpbs } from "./Jpbs";
import { Jpbs2 } from "./Jpbs2";
import { Suspense, useRef, useEffect, useState } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'



// studio.initialize()
// studio.extend(extension)


const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

function TweakableBox() {
  const [{ scale, position }, set] = useControls("pointlight", () => ({
    transform: folder({
      scale: {
        value: 1,
        min: 0.4,
        max: 4,
        step: 0.2,
      },
      position: [0.3, 41.37, -18],
    }),
  }));

  return (
    <pointLight
      scale={scale}
      position={position}
      castShadow={true}
      shadow-mapSize={[2048, 2048]}/>
  );
}

// function CameraHelper() {
//   return (
//     <cameraHelper></cameraHelper>
//   )
// }

function Scene() {
  return (
    <Canvas
      shadows
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [11, -6, -18], fov: 35 }}
    >
      <SheetProvider sheet={demoSheet}>
        {/* <ambientLight intensity={.3} castShadow={true}/> */}
        <pointLight
          position={[0, 0, 0]}
          intensity={0.2}
          castShadow={true}
          shadow-mapSize={[256, 256]}
        />
        {/* <pointLight position={[0, 0, 0]} intensity={10} castShadow={true} color={'green'} distance={2}/> */}
        {/* <pointLight position={[-3, -3, 2]} /> */}
        {/* <OrbitControls /> */}
        {/* <FlyControls movementSpeed={10}/> */}
        <Suspense fallback={null}>
        <FirstPersonControls
          movementSpeed={5}
          lookSpeed={0.05}
          activeLook={true}
        />
        {/* <Room/> */}
        {/* <Model castShadow receiveShadow/> */}
        {/* <Jpbs scale={0.02}> */}
        {/* <PositionalAudio url="/public\Wating_Room.mp3" autoplay loop /> */}
        {/* </Jpbs> */}
        <Jpbs2 scale={0.02}></Jpbs2>
        {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20}/> */}
        {/* <CameraHelper/> */}
        <TweakableBox />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={5} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.2} />
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
          {/* <Glitch ratio={100}/> */}
        </EffectComposer>

        {/* <BakeShadows/> */}
      </Suspense>
      </SheetProvider>
    </Canvas>
  );
}

function App() {
  return (
    <div className="App h-screen bg-[#000000]">
      <Leva hidden/>
      <Scene />
    </div>
  );
}

export default App;
