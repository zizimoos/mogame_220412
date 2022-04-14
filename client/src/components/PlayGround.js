import React from "react";

function PlayGround(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhongMaterial attach="material" color="teal" />
      <axesHelper args={[10]} />
    </mesh>
  );
}

export default PlayGround;
