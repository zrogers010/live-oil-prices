import { Component } from 'react';
import { withRouter } from './util/withRouter.js';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import '../resources/style/chart.css';

class Chart extends Component {

    render() {

        return (
            <div>
                <div className='chart'>
                    <TradingViewWidget
                    symbol={this.props.symbol}
                    theme={Themes.LIGHT}
                    locale="en"
                    autosize
                    allow_symbol_change={false}
                    />
                </div>
            </div>
        )
    }

}

export default withRouter(Chart);