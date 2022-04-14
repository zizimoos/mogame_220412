import { atom } from "recoil";

export const playerPosition = atom({
  key: "playerPosition",
  default: { x: 0, y: 0, z: 0 },
});
