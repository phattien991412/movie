import { actionType } from "../action/type";

const initialState = {
  carousel: [],
  movies: [],
  dangChieu: [],
  sapChieu: [],
  
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CAROUSEL:
      state.carousel = payload;
      return { ...state };

    case actionType.SET_MOVIE:
      state.movies = payload;
      
      return { ...state };

    case actionType.PHIM_DANG_CHIEU:
      state.dangChieu = payload
      return { ...state };

    case actionType.PHIM_SAP_CHIEU:
      state.sapChieu = payload
      return { ...state };

    default:
      return state;
  }
};
