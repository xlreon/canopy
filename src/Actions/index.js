import { getChartData } from "../Services";

const AppActions = {
  GET_NETWORTH_DATA: "GET_NETWORTH_DATA",
  FAILED_NETWORTH_DATA: "FAILED_NETWORTH_DATA",
};

const setChartData = () => (dispatch) =>
  getChartData.then((data) => {
    typeof data === Object
      ? dispatch({
          type: AppActions.GET_NETWORTH_DATA,
          payload: data,
        })
      : dispatch({
          type: AppActions.FAILED_NETWORTH_DATA,
          payload: data,
        });
  });

export { AppActions, setChartData };
