import { iex } from '../config/iex.js';

export const getSummary = {

	getData: (symbol, callback) => {
		const url = getSummary.energy_url(symbol)
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			//console.log(data);
			callback(getSummary.formatData(data));
		})
	}, 
	
	energy_url: (symbol) => {
		return `${iex.base_url}/time-series/energy/${symbol}?token=${iex.api_token}`
		// return `${iex.base_url}/time-series/energy/DCOILWTICO?token=${iex.api_token}`
		
		// WTI crude
		// https://cloud.iexapis.com/stable/time-series/energy/DCOILWTICO?token=pk_ed2c04cd7023450d8454cb7fd45ee267


	},
	
	formatData: (data) => {
		const formattedData = {}
		formattedData.value = data[0].value
		formattedData.id = data[0].id
		formattedData.key = data[0].key
		formattedData.date = data[0].date
		formattedData.updated = data[0].updated

		// Sconsole.log("formattedData :", formattedData)
		
		return formattedData
	}
}