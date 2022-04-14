import { actionType } from "../action/type";

const initialState = {
  cinema: [],
  cinemaAddress: [],
  movieSchedule: [],
  cinemaDetail: [],
  bookingTicket: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CINEMA:
      state.cinema = payload;
      return { ...state };

    case actionType.CINEMA_ADDRESS:
      state.cinemaAddress = payload;
      return { ...state };

    case actionType.MOVIE_SCHEDULE:
      state.movieSchedule = payload;
      return { ...state };

    case actionType.CINEMA_DETAIL:
      state.cinemaDetail = payload;
      return { ...state };

    case actionType.BOOK_TICKET:
      let cloneBooking = [...state.bookingTicket]

      let index = cloneBooking.findIndex(item => item.maGhe === payload.maGhe)
      if(index != -1 ) {
        cloneBooking.splice(index, 1)
      } else {
        cloneBooking.push(payload);

      }
      console.log(payload)
    return {...state, bookingTicket: cloneBooking}

    default:
      return state;
  }
};
