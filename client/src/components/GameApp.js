import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Archer from "./models/Archer";
import PlayGround from "./PlayGround";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 800px;
  height: 800px;
  background-color: black;
`;

function GameApp(props) {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <ambientLight />
          <directionalLight
            position={[0, 20, 10]}
            color="white"
            intensity={0.5}
          />
          <pointLight position={[-1, 1, 3]} color="red" intensity={2} />
          <pointLight position={[1, 1, 3]} color="blue" intensity={2} />
          <pointLight position={[0, 3, -10]} color="white" intensity={2} />
          <Archer />
          <PlayGround />
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default GameApp;
