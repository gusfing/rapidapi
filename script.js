const url = 'https://myanimelist.p.rapidapi.com/anime/1535';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '18b9d96a98mshfee5c7ace0ee1f6p19f8a6jsn5fa0373b3f86',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
