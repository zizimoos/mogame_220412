import React from "react";

function PlayGround(props) {
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" color="teal" />
      <axesHelper args={[10]} />
    </mesh>
  );
}

export default PlayGround;
