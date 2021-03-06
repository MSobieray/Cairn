const TOGGLE = (state, payload = !state.visible) => {
  state.visible = payload;
};

const UPDATE = (state, payload) => {
  console.log(payload);
  state.type = payload.type;
  // Temporary State Update
  state.page = payload;
};

export default {
  TOGGLE,
  UPDATE
};
