import { Component } from 'react';
import { numFormat } from '../../resources/num-format.js';
import { getSummary } from '../../resources/get-summary.js';
import '../../resources/style/tabs-style.css';

class Diesel extends Component {
		constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	applyData(data) {
		this.setState({
			data: data
		})
		console.log("Diesel: ", this.state.data)
	}
		
	componentDidMount() {
		getSummary.getData("GASDESW", this.applyData.bind(this))
	}

    render() {
        return (
            <div className="tab-container">
					<div>Diesel Fuel Avg</div>
                    <div>${this.state.data.value}</div>
            </div>
        )
    }
}

export default Diesel;