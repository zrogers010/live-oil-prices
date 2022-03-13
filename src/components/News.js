import { Component } from 'react';
import { withRouter } from './util/withRouter';
import { getNews } from '../resources/get-news.js';
import '../resources/style/news.css';

class News extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	
	applyData(data) {
		this.setState({
			data: data
		})
		//console.log(" NEWS ", this.state.data)
	}
		
	componentDidMount() {
		getNews.getLatestNews(this.props.symbol, this.applyData.bind(this))
	}

	render() {
	    return (
            <>
			<div className="news-container">
			    <div className="news-headline">
                    Headlines
                </div>
				<ul>
                    {this.state.data.map((d) => {
                        return(
                            <li key={d.url}>
                                <div className="article">
                                    <div className="article-left">
                                        <div className="article-image">
                                            <img src={ d.image } width="220" height="124" image-rendering="smooth"/>
                                            {/* <img src={ d.image } width="300px" height="169" image-rendering="smooth"/> */}
                                        </div>
                                    </div>
                                    <div className="article-right">
                                        {/* <a href={d.url}> */}
                                            <div className="article-title">
                                                <a href={d.url}>{ d.headline }</a>
                                            </div>
                                        {/* </a> */}
                                        <div className="article-source">
                                            { d.source }
                                        </div>
                                        <div className="article-date">
                                            { d.date }
                                        </div>
                                        <div className="article-summary">
                                            { d.summary }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
				</ul>
            </div>
			</>
        )
	}
}


export default withRouter(News);