import React from "react";

class TabSwitch extends React.Component {
  render() {
    const { setCurrentTab, currentTab } = this.props;
    return (
      <ul
        className="nav nav-pills nav-pills-primary nav-pills-icons"
        role="tablist"
      >
        <li className="nav-item" onClick={() => setCurrentTab(1)}>
          <a
            className={"nav-link" + (currentTab === 1 ? " active" : "")}
            role="tablist"
          >
            <i className="tim-icons icon-chart-bar-32"></i> NetWorth Chart
          </a>
        </li>
        <li className="nav-item" onClick={() => setCurrentTab(2)}>
          <a
            className={"nav-link" + (currentTab === 2 ? " active" : "")}
            role="tablist"
          >
            <i className="tim-icons icon-bullet-list-67"></i> Holdings Table
          </a>
        </li>
      </ul>
    );
  }
}

export default TabSwitch;
