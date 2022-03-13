import { Component } from 'react';
import { withRouter } from './util/withRouter.js';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Nav from './Nav';
import '../resources/style/chart.css';

class Chart extends Component {

    render() {
        return (
            <div>
                <div className='chart'>
                    <TradingViewWidget
                    symbol={this.props.symbol}
                    //symbol="NYMEX:CL1!"
                    //theme={Themes.DARK}
                    theme={Themes.LIGHT}
                    locale="en"
                    autosize
                    allow_symbol_change={false}
                    //hide_side_toolbar={false}
                    />
                </div>
            </div>
        )
    }

}

export default withRouter(Chart);