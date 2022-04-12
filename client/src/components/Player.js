import React from "react";
import Archer from "./models/Archer";
import styled from "styled-components";

const NameTag = styled.div`
  padding-top: 10px;
  transform: translate3d(-20%, -400%, 0);
  text-align: left;
  background: #202035;
  color: white;
  padding: 5px 5px;
  border-radius: 5px;
  font-size: 1rem;
`;
function Player(props) {
  return (
    <group>
      <mesh>
        <Archer />
      </mesh>
      <axesHelper args={[1]} />
    </group>
  );
}

export default Player;
