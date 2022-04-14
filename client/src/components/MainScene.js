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
import { useFrame } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { playerPosition } from "./atoms.js";

function MainScene(props) {
  const orbitControlsRef = useRef(null);
  const defaultCamera = useRef(null);

  const position = useRecoilValue(playerPosition);

  useFrame((state) => {
    // console.log(state);
    // console.log(defaultCamera.current.position);
    // console.log(orbitControlsRef.current.target);
    console.log("characterPosition", position);
    defaultCamera.current.position.x = position.x;
    defaultCamera.current.position.y = position.y;
    defaultCamera.current.position.z = position.z;
    orbitControlsRef.current.target.set(position.x, position.y, position.z);
    orbitControlsRef.current.update();
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera
        ref={defaultCamera}
        makeDefault
        position={[0, 15, 15]}
      />
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        maxDistance={15}
        minDistance={5}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={Math.PI / 2 - 0.5}
      />

      <ambientLight args={["#ffffff", 0.8]} />
      <directionalLight
        position={[-100, 200, -100]}
        color="white"
        intensity={0.5}
        castShadow
      />
      <spotLight
        position={[-5, 1, 0]}
        args={["#ffffff", 1, 7, angleToRadians(30), 0.4]}
        intensity={3}
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
