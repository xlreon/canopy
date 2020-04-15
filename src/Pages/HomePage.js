import React from 'react';
import { Header, TabSwitch, HoldingsTable, NetWorthChart } from '../Components/'
import './HomePage.css';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1
        }
    }

    _getTabView = currentTab => ({
                1: <NetWorthChart/>,
                2: <HoldingsTable/>
                })[currentTab]


    setCurrentTab = tabNumber => {
        console.log(tabNumber)
        this.setState({currentTab: tabNumber})
    }

    render() {
        const { currentTab } = this.state
        return (
            <div className="container">
                <Header/>
                <TabSwitch setCurrentTab={this.setCurrentTab} currentTab={currentTab}/>
                {this._getTabView(currentTab)}
            </div>
        );
    }
}

export default HomePage;