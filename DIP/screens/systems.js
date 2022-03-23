import "./Globals"

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
  }
  return entities;
}
export {updatePostion};


export { MoveFinger };
export { MoveAvatar };


