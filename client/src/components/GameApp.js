import React from "react";
import { Canvas } from "@react-three/fiber";
import { RecoilRoot } from "recoil";

import styled from "styled-components";
import MainScene from "./MainScene";

const CanvasContainer = styled.div`
  width: 800px;
  height: 800px;
  background-color: black;
`;

function GameApp(props) {
  return (
    <CanvasContainer>
      <Canvas>
        <RecoilRoot>
          <MainScene />
        </RecoilRoot>
      </Canvas>
    </CanvasContainer>
  );
}

export default GameApp;
