import React from "react";
import { setTableData } from "../Actions";
import { connect } from "react-redux";
import "./HoldingsTable.css";

class HoldingsTable extends React.Component {
  componentWillMount() {
    this.props.setTableData();
  }

  _getTableColumn = (data) =>
    Object.keys(data).map((key) => <td>{data[key]}</td>);

  _getTableRow = (data) => <tr>{this._getTableColumn(data)}</tr>;

  _generateTable = (data) => data.map((element) => this._getTableRow(element));

  _generateTableHeaders = () => (
    <tr>
      {Object.keys(this.props.holdingsData[0]).map((key) => (
        <th>{key}</th>
      ))}
    </tr>
  );

  render() {
    const { holdingsData } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <table style={{ height: "100%" }}>
            {holdingsData && this._generateTableHeaders()}
            {holdingsData && this._generateTable(holdingsData)}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  holdingsData: state.holdingsData,
});

export default connect(mapStateToProps, { setTableData })(HoldingsTable);
