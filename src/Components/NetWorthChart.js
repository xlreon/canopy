import React from "react";
import { setChartData } from "../Actions";
import { connect } from "react-redux";

class NetWorthChart extends React.Component {
  componentWillMount() {
    this.props.setChartData();
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p className="title">NetWorthChart</p>
        </div>
      </div>
    );
  }
}

export default connect(null, { setChartData })(NetWorthChart);
