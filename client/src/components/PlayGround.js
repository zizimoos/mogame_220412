import React from "react";

function PlayGround(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" color="teal" />
      <axesHelper args={[10]} />
    </mesh>
  );
}

export default PlayGround;
