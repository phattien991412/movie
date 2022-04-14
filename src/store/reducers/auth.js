import { actionType } from "../action/type";

const initialState = {
  signIn: false,
  register: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_SIGN_IN:
      state.signIn = payload;
      return { ...state };
    
      case actionType.SET_REGISTER:
        state.register = payload;
        return { ...state };

    default:
      return state;
  }
};
