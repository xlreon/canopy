import React from "react";
import { setTableData } from "../Actions";
import { connect } from "react-redux";
import "./HoldingsTable.css";
import _ from "underscore";

class HoldingsTable extends React.Component {
  componentWillMount() {
    this.props.setTableData();
  }

  _getTableColumn = (data) =>
    Object.keys(data).map((key) => <td>{data[key]}</td>);

  _getTableRow = (data) => <tr>{this._getTableColumn(data).reverse()}</tr>;

  _generateTable = (data) =>
    _.map(data, (element) => this._getTableRow(element));

  _generateTableHeaders = () => (
    <tr>
      {Object.keys(this.props.holdingsData[0])
        .map((key) => <th>{key}</th>)
        .reverse()}
    </tr>
  );

  render() {
    const { holdingsData } = this.props;
    const checkData = !_.isEmpty(this.props.holdingsData);
    return (
      <div className="card">
        <div className="card-content">
          <table style={{ height: "100%" }}>
            {checkData && this._generateTableHeaders()}
            {checkData && this._generateTable(holdingsData)}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { holdingReducer } = state;
  const { HoldingTable: ReduxHoldingTable } = holdingReducer;
  const holdingsData = ReduxHoldingTable.itemsById;
  return {
    holdingsData: Boolean(holdingsData) ? holdingsData : null,
  };
};

export default connect(mapStateToProps, { setTableData })(HoldingsTable);
