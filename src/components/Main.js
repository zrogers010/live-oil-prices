import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { withRouter } from './util/withRouter';
import Nav from './Nav.js';
import Chart from './Chart.js';
import Summary from './Summary.js';
import Stats from './Stats.js';
import News from './News.js';

import '../resources/style/main.css';

class Main extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
        
	}
	//const [state, setState] = React.useState("");
	render() {
		return (	
            <div className="main-home-container">
                <Summary />
            </div>
        )
    }
}

export default withRouter(Main);