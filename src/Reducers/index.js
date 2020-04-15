import { AppActions } from "../Actions";
import { initialState } from "../Store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
            default:
        return state;
    }
}
