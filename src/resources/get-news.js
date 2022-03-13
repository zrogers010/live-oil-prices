

// https://cloud.iexapis.com/stable/stock/coin/news/last/20?token=pk_ed2c04cd7023450d8454cb7fd45ee267


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
		return `${iex.base_url}/stock/${symbol}/news?token=${iex.api_token}`
	},
	
	formatNewsData: (data) => {
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

		//console.log("NEWS[]: ", news);
		return news;
	}
}