import React from "react";
import { setChartData } from "../Actions";
import { connect } from "react-redux";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class NetWorthChart extends React.Component {
  componentWillMount() {
    this.props.setChartData();
  }

  componentDidMount() {
    this.chart = this.generateChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.netWorthChartData !== nextProps.netWorthChartData) {
      this.chart = this.generateChart(nextProps.netWorthChartData);
    }
  }

  generateChart = (netWorthChartData) => {
    // am4core.useTheme(am4themes_animated);
    // am4core.useTheme(am4themes_kelly);
    this.chart = am4core.create("networth", am4charts.XYChart);
    this.chart.data = netWorthChartData ? netWorthChartData : [];
    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "traded_on";
    categoryAxis.title.text = "Traded On";

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Net Worth";
    let series = this.chart.series.push(new am4charts.ColumnSeries());

    series.name = "Traded On";
    series.columns.template.fill = am4core.color("#104547");
    series.dataFields.valueY = "net_worth";
    series.dataFields.categoryX = "traded_on";

    let series2 = this.chart.series.push(new am4charts.LineSeries());
    series2.name = "Net Worth";
    series2.stroke = am4core.color("#CDA2AB");
    series2.strokeWidth = 1;
    series2.dataFields.valueY = "net_worth";
    series2.dataFields.categoryX = "traded_on";
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div
            className="networth"
            style={{ width: "100%", height: "500px" }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  netWorthChartData: state.netWorthChartData,
});

export default connect(mapStateToProps, { setChartData })(NetWorthChart);
