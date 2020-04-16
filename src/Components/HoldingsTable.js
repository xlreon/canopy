import React from "react";
import { setTableData } from "../Actions";
import { connect } from "react-redux";

class HoldingsTable extends React.Component {
  componentWillMount() {
    this.props.setTableData();
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p className="title">HoldingsTable</p>
        </div>
      </div>
    );
  }
}

export default connect(null, { setTableData })(HoldingsTable);
