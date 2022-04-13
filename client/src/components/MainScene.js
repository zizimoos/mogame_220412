import React, { Suspense, useEffect, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import PlayGround from "./PlayGround";
import Player from "./Player";

function MainScene(props) {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    // console.log(state.mouse);
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.getAzimuthalAngle(x, y);
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 20, 20]} />
      <OrbitControls ref={orbitControlsRef} />

      <ambientLight />
      <directionalLight position={[0, 20, 10]} color="white" intensity={0.5} />
      <pointLight position={[-1, 1, 3]} color="red" intensity={2} />
      <pointLight position={[1, 1, 3]} color="blue" intensity={2} />
      <pointLight position={[0, 3, -10]} color="white" intensity={2} />

      <Suspense fallback={null}>
        <Player></Player>
        <mesh>
          <boxGeometry attach="geometry" args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial attach="material" color="red" />
        </mesh>
      </Suspense>

      <PlayGround />
    </>
  );
}

export default MainScene;
