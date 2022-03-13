import { Component } from 'react'
import { Link } from 'react-router-dom'
import '../resources/style/nav.css'

class Nav extends Component {

	render() {
		return (
			<div className="nav-container">
				<ul className="nav-bar">
                    {/* Site Logo */}
					<li className="nav-logo nav-item">
						<Link to="/" className="link-light">
							LIVEOILPRICES
						</Link>
					</li>
                    {/* Site Navigation */}
                    {/* <li className="nav-select nav-item">
						<Link to="/etf" className="link-light">
							Search Box
						</Link>
					</li>
					<li className="nav-select nav-item">
						<Link to="/etf" className="link-light">
							ETFs
						</Link>
					</li> */}
					<li className="nav-select nav-item">
						<Link to="/news" className="link-light">
							News
						</Link>
					</li>
					<li className="nav-select nav-item">
						<Link to="/chart" className="link-light">
							Charts
						</Link>
					</li>

				</ul>
			</div>
		)
	}
}

export default Nav;
