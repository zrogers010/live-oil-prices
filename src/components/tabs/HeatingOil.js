import { Component } from 'react';
import { numFormat } from '../../resources/num-format.js';
import { getSummary } from '../../resources/get-summary.js';
import '../../resources/style/tabs-style.css';

class HeatingOil extends Component {
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
		console.log("Heating oil: ", this.state.data)
	}
		
	componentDidMount() {
		getSummary.getData("DHOILNYH", this.applyData.bind(this))
	}

    render() {
        return (
            <div className="tab-container">
					<div>Heating Oil</div>
                    <div>${this.state.data.value}</div>
            </div>
        )
    }
}

export default HeatingOil;