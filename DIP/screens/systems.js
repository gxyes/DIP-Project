import "./Globals"
import { Firework } from "./renderers";
import ConfettiCannon from 'react-native-confetti-cannon';

let numbers = 1;
const MoveFinger = (entities, { touches }) => {

  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches.filter(t => t.type === "move").forEach(t => {
    let finger = entities[t.id];
    if (finger && finger.position) {
      finger.position = [
        finger.position[0] + t.delta.pageX,
        finger.position[1] + t.delta.pageY
      ];
    }
  });

  return entities;
};

const MoveAvatar = (entities, { touches }) => {

  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches.filter(t => t.type === "move").forEach(t => {
    let avatar = entities[t.id];
    if (avatar && avatar.position) {
    }
  });

  return entities;
};

function updatePostion(entities) {
  let imgAvatar = entities[numbers];
  // top = imgAvatar.position[1];
  // left = imgAvatar.position[0];
  if (imgAvatar && imgAvatar.position) {
    imgAvatar.position = [
      global.left, global.top
    ];
    entities[3] = {}
  }
  if ((global.top == 530 && global.left == 290)||(global.top == 470 && global.left == 160)||(global.top == 380 && global.left == 20)||(global.top == 240 && global.left == 120)) {
    entities[3] = { position: [0, 0], renderer: <Firework/>}
    entities[3].position = [
      global.firework, global.firework
    ];
  }
  return entities;
}

export {updatePostion};
export { MoveFinger };
export { MoveAvatar };