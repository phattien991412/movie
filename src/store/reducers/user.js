import { actionType } from "../action/type";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_ME:
      state.user = payload;
      return { ...state };

    default:
      return state;
  }
};
