import { Component } from 'react';
import { withRouter } from './util/withRouter';
import Summary from './Summary.js';

import '../resources/style/main.css';

class Main extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}

	render() {
		return (	
            <div className="main-home-container">
                <Summary />
            </div>
        )
    }
}

export default withRouter(Main);