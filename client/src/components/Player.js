import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Archer from "./models/Archer";
import { playerPosition } from "./atoms";
import { useFrame } from "@react-three/fiber";

function Player(props) {
  const playerMove = useRef(null);
  const [action, setAction] = useState("DwrafIdel");

  const [position, setPosition] = useRecoilState(playerPosition);

  useFrame(() => {
    console.log("characterPosition", position);
  });

  document.onkeydown = (e) => {
    switch (e.keyCode) {
      case 37:
        playerMove.current.position.x = playerMove.current.position.x -= 0.6;
        playerMove.current.rotation.y = playerMove.current.rotation.y =
          -Math.PI / 2;
        setAction("Run");
        setPosition({
          x: playerMove.current.position.x,
          y: playerMove.current.position.y,
          z: playerMove.current.position.z,
        });
        break;
      case 39:
        playerMove.current.position.x = playerMove.current.position.x += 0.6;
        playerMove.current.rotation.y = playerMove.current.rotation.y =
          Math.PI / 2;
        setAction("Run");
        setPosition({
          x: playerMove.current.position.x,
          y: playerMove.current.position.y,
          z: playerMove.current.position.z,
        });
        break;
      case 38:
        playerMove.current.position.z = playerMove.current.position.z -= 0.6;
        playerMove.current.rotation.y = playerMove.current.rotation.y =
          -Math.PI;
        setAction("Run");
        setPosition({
          x: playerMove.current.position.x,
          y: playerMove.current.position.y,
          z: playerMove.current.position.z,
        });
        break;
      case 40:
        playerMove.current.position.z = playerMove.current.position.z += 0.6;
        playerMove.current.rotation.y = playerMove.current.rotation.y = 0;
        setAction("Run");
        setPosition({
          x: playerMove.current.position.x,
          y: playerMove.current.position.y,
          z: playerMove.current.position.z,
        });
        break;
      default:
    }
  };
  document.onkeyup = (e) => {
    switch (e.keyCode) {
      case 37:
        setAction("DwrafIdel");
        break;
      case 39:
        setAction("DwrafIdel");
        break;
      case 38:
        setAction("DwrafIdel");
        break;
      case 40:
        setAction("DwrafIdel");
        break;
      default:
    }
  };

  // eslint-disable-next-line
  const playerInfo = {
    id: "1",
    name: "Archer",
    position: playerMove.current,
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    action: "idle",
    previousAction: "idle",
    isMoving: false,
  };

  return (
    <group ref={playerMove}>
      <mesh>
        <Archer action={action} />
      </mesh>
      <axesHelper args={[2]} />
    </group>
  );
}

export default Player;
