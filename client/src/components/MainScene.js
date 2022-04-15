import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

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
  const ballRef = useRef(null);
  const DlightRef = useRef(null);

  const position = useRecoilValue(playerPosition);

  useFrame((state) => {
    // console.log("characterPosition", position);
    defaultCamera.current.position.x = position.x;
    defaultCamera.current.position.y = position.y + 15;
    defaultCamera.current.position.z = position.z;
    orbitControlsRef.current.target.set(position.x, position.y, position.z);

    DlightRef.current.position.x = position.x;
    DlightRef.current.position.y = position.y + 15;
    DlightRef.current.position.z = position.z;
    orbitControlsRef.current.update();
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);
      gsap.fromTo(
        ballRef.current.position,
        { x: 0, y: 0, z: 0 },
        {
          x: 0,
          y: 8,
          z: 0,
          duration: 3,
          ease: "power1.inOut",
          repeat: -1,
        }
      );
    }
  }, [ballRef.current?.position]);

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
        ref={DlightRef}
        position={[-100, 200, -200]}
        scale={[500, 500, 500]}
        color="white"
        intensity={2}
        distance={100}
        castShadow
      />
      <spotLight
        position={[15, 80, 35]}
        scale={[500, 500, 500]}
        args={["#ffffff", 7, Math.PI / 4, 0.4]}
        intensity={15}
        distance={100}
        castShadow
      />

      <mesh castShadow>
        <Player />
      </mesh>

      <mesh position={[0, 3, 0]} castShadow ref={ballRef}>
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
