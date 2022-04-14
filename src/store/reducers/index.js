import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movie from "./movie";
import cinema from './cinema'
import user from './user'
import auth from "./auth"
import loading from "./loading"
const reducer = combineReducers({
  // Khai báo reducer con
  movie,
  cinema,
  user,
  auth,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
