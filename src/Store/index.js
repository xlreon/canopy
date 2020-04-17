import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createReducer } from "redux-orm";
import reducer from "../Reducers";
import { orm } from "../Models";

const initialState = {
  netWorthChartData: null,
  holdingsData: null,
};

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const holdingReducer = createReducer(orm);

const rootReducer = combineReducers({
  reducer,
  holdingReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export { store, initialState };
