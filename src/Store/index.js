import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createReducer } from "redux-orm";
import reducer from "../Reducers";
import { orm } from "../Models";

const initialState = {
  netWorthChartData: null,
  holdingsData: null,
};

const holdingReducer = createReducer(orm);

const rootReducer = combineReducers({
  reducer,
  holdingReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export { store, initialState };
