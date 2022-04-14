import { createAction } from "./index";
import { actionType } from "./type";
import { movieService } from "../../services/ManageMovie";

// export const fetchBanner = () => {
//   return async (dispatch) => {
//     dispatch(createAction(actionType.IS_LOADING, true));
//     try {
//       const res = await movieService.fetchBanner();

//       dispatch(createAction(actionType.SET_CAROUSEL, res.data));
//     } catch (err) {}

//     setTimeout(() => {
//       dispatch(createAction(actionType.IS_LOADING, false));
//     }, 400);
//   };
// };

export const fetchMovies = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await movieService.fetchMovies();

      dispatch(createAction(actionType.SET_MOVIE, res.data));
      if (callback) {
        callback();
      }
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400);
  };
};
