/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ action }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/archer.glb");
  const { actions } = useAnimations(animations, group);

  const previousAction = usePrevious(action);

  useEffect(() => {
    console.log("actions", actions);

    actions.Run.play();
  }, [action, actions, previousAction]);
  return (
    <group ref={group} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            geometry={nodes.Erika_Archer_Body_Mesh.geometry}
            material={materials.Body_MAT}
            skeleton={nodes.Erika_Archer_Body_Mesh.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Erika_Archer_Clothes_Mesh.geometry}
            material={materials.Akai_MAT}
            skeleton={nodes.Erika_Archer_Clothes_Mesh.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Erika_Archer_Eyelashes_Mesh.geometry}
            material={materials.Lashes_MAT}
            skeleton={nodes.Erika_Archer_Eyelashes_Mesh.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Erika_Archer_Eyes_Mesh.geometry}
            material={materials.EyeSpec_MAT}
            skeleton={nodes.Erika_Archer_Eyes_Mesh.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/archer.glb");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
