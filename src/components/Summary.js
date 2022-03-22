import { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { withRouter } from './util/withRouter';
import WTI from './tabs/WTI.js';
import Brent from './tabs/Brent.js';
import Nat from './tabs/Nat.js';
import Gas from './tabs/Gas.js';
import JetFuel from './tabs/JetFuel.js';
import Diesel from './tabs/Diesel.js';
import HeatingOil from './tabs/HeatingOil.js';
import ChartCard from './ChartCard.js';
//import Stats from './Stats.js';
import News from './News.js';
import "react-tabs/style/react-tabs.css";
import "../resources/style/summary.css";

class Summary extends Component {

	constructor(props) {
		super(props)
		this.state = {
			symbol: ""
		}
	}

    render() {
        return (
            <div className="summary-container">
                <Tabs selectedIndex={this.props.symbol} onSelect={symbol => this.setState({ symbol })}>
                    <TabList>
                        <Tab>
                            <div><WTI /></div>
                        </Tab>
                        <Tab>
                            <div><Brent /></div>
                        </Tab>
                        <Tab>
                            <div><Nat /></div>
                        </Tab>
                        <Tab>
                            <div><Gas /></div>
                        </Tab>
                        <Tab>
                            <div><JetFuel /></div>
                        </Tab>   
                        <Tab>
                            <div><Diesel /></div>
                        </Tab>
                        <Tab>
                            <div><HeatingOil /></div>
                        </Tab>                     
                    </TabList>
                    <div>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:CL1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"USO"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:BB1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"BNO"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:NG1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"UNG"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:RB1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"UGA"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:AGE1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"USO"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:AGT1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"USO"}/>
                    </TabPanel>
                    <TabPanel>
                        <ChartCard symbol={"NYMEX:YF1!"}/>
                        {/* <Stats /> */}
                        <News symbol={"USO"}/>
                    </TabPanel>
                    </div>    
                </Tabs>
            </div>
        )
    }    
}

export default Summary;