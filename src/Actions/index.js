import { getChartData } from "../Services";
import moment from "moment";

const AppActions = {
  GET_NETWORTH_DATA: "GET_NETWORTH_DATA",
  FAILED_NETWORTH_DATA: "FAILED_NETWORTH_DATA",
};

const _transformData = (data) => {
  let result = data.filter((n) =>
    moment().subtract(1, "years").isSameOrBefore(moment(n.traded_on))
  );
  return result
    .map((element) => ({
      traded_on: moment(element.traded_on).format("L"),
      net_worth: Number(element.net_worth),
    }))
    .reverse();
};

const setChartData = () => (dispatch) =>
  getChartData.then((data) => {
    typeof data === "object"
      ? dispatch({
          type: AppActions.GET_NETWORTH_DATA,
          payload: _transformData(data),
        })
      : dispatch({
          type: AppActions.FAILED_NETWORTH_DATA,
          payload: data,
        });
  });

export { AppActions, setChartData };
