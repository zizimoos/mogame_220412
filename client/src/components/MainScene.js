import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { angleToRadians } from "../utils/angle.js";

import PlayGround from "./PlayGround";
import Player from "./Player";

function MainScene(props) {
  const orbitControlsRef = useRef(null);
  // useFrame((state) => {
  //   console.log(state.mouse);
  //   if (!!orbitControlsRef.current) {
  //     const { x, y } = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
  //     orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 35));
  //     orbitControlsRef.current.update();
  //   }
  // });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 15, 15]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />

      <ambientLight args={["#ffffff", 0.8]} />
      <directionalLight
        position={[-100, 200, -100]}
        color="white"
        intensity={0.5}
        castShadow
      />
      <spotLight
        position={[-3, 1, 0]}
        args={["#ffffff", 1, 7, angleToRadians(30), 0.4]}
        castShadow
      />

      <mesh castShadow>
        <Player />
        <sphereGeometry attach="geometry" args={[0.3, 32, 32]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
      <mesh>
        <PlayGround />
      </mesh>

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2280cc" />
        </mesh>
      </Environment>
    </>
  );
}

export default MainScene;
