import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducers";

const initialState = {
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };