import React from 'react'

class TabSwitch extends React.Component {
    render() {
        const {setCurrentTab, currentTab} = this.props;
        return(
        <div className="tabs is-medium">
        <ul>
            <li className={currentTab === 1 && "is-active"} onClick={() => setCurrentTab(1)}><a>NetWorth Chart</a></li>
            <li className={currentTab === 2 && "is-active"} onClick={() => setCurrentTab(2)}><a>Holdings Table</a></li>
        </ul>
        </div>
        )
    }
}

export default TabSwitch