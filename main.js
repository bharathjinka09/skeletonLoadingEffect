const city = `tadipatri`,
	  apiKey = `9b2ff67bcf783bf351ac8bb85a666f48`,
	  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 

const card = document.querySelector('.weather-card');

const generateCard = (i,c,w) => {
	return (
		`
		<img src="https://openweathermap.org/img/w/${i}.png">
		<h1>${c}</h1>
		<p>${w}</p>
		`
	)
}

console.log(apiUrl)

fetch(apiUrl)
	.then(data => data.json())
	.then(weather => generateCard(weather.weather[0].icon, weather.name, weather.weather[0].description))
	.then(html => card.innerHTML =html)