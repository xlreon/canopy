import { AppActions } from "../Actions";
import { initialState } from "../Store";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AppActions.GET_NETWORTH_DATA:
      return { ...state, netWorthChartData: payload };
    case AppActions.FAILED_NETWORTH_DATA:
      return { ...state, netWorthChartError: payload };
    case AppActions.GET_HOLDINGS_DATA:
      return { ...state, holdingsData: payload };
    case AppActions.FAILED_HOLDINGS_DATA:
      return { ...state, holdingsError: payload };
    default:
      return state;
  }
}

export default reducer;
