import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
          <PlayGround />
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default GameApp;
