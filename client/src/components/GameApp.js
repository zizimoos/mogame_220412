import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RecoilRoot } from "recoil";

import styled from "styled-components";
import MainScene from "./MainScene";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 800px;
  background-color: teal;
`;

function GameApp(props) {
  return (
    <CanvasContainer>
      <Canvas shadows>
        <RecoilRoot>
          <Suspense fallback={null}>
            <MainScene />
          </Suspense>
        </RecoilRoot>
      </Canvas>
    </CanvasContainer>
  );
}

export default GameApp;
