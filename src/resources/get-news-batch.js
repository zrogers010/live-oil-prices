import { iex } from '../config/iex.js';
import { Dayjs } from 'dayjs';

export const getNews = {

	getLatestNews: (symbol, callback) => {
		const url = getNews.latestNewsURL(symbol)
		console.log(url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(getNews.formatNewsData(data));
		})
	}, 
	
	latestNewsURL: (symbol) => {
		return `${iex.base_url}/stock/${symbol}/news?token=${iex.api_token}`;
		//const symbols = 'USO,BNO,UNG,UGA,GLD,UCO';
		//return `https://cloud.iexapis.com/stable/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5&
	},
	
	formatNewsData: (data) => {
		console.log("NEWS: ", data);
		const news = []
		for (let i=0; i<data.length; i++) {
            const formattedData = {}
            const dt = new Date(data[i].datetime);
            const date = dt.toLocaleString('en-US', { timezone: 'UTC' });
            formattedData.date = date;
			formattedData.headline = data[i].headline;
			formattedData.summary = data[i].summary
			formattedData.image = data[i].image
			formattedData.source = data[i].source
			formattedData.url = data[i].url
			news.push(formattedData);
		}

		return news;
	}
}