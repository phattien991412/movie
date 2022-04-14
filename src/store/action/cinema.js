import { cinemaService } from "../../services/CinemaService";
import { createAction } from "./index";
import { actionType } from "./type";

export const fetchCinema = () => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await cinemaService.fetchCinema();
      dispatch(createAction(actionType.SET_CINEMA, res.data));
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400)
  };
};

export const fetchCinemaAddress = () => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await cinemaService.fetchCinemaAddress();
      dispatch(createAction(actionType.CINEMA_ADDRESS, res.data));
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400)
  };
};

export const fetchMovieSchedule = (id) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await cinemaService.fetchMovieSchedule(id);
      dispatch(createAction(actionType.MOVIE_SCHEDULE, res.data));
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400)
  };
};

export const fetchCinemaDetail = (id, callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await cinemaService.fetchCinemaDetail(id);
      dispatch(createAction(actionType.CINEMA_DETAIL, res.data));
      if (callback) {
        callback();
      }
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400)
  };
};
