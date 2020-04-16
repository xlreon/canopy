import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducers";

const initialState = {
  netWorthChartData: null,
  holdingsData: null,
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };
