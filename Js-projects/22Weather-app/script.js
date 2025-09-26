document.addEventListener("DOMContentLoaded", function () {
	const body = document.body;
	const API_KEY = "46544b0cedb8b4ecd4a5ebc480021ca1";
	const LOCATION_URL = "https://api.openweathermap.org/data/2.5/weather?";

	navigator.geolocation.getCurrentPosition(async (position) => {
		const userCityInfo = await loadWeatherDataBasedOnUserPosition(position);
		body.append(renderMainContent(userCityInfo));
		console.log(userCityInfo);
	}, error => console.log(error));
	const loadWeatherDataBasedOnUserPosition = async (position) => {
		const response = await fetch(
			`${LOCATION_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=pl&appid=${API_KEY}&units=metric`
		);
		const data = await response.json();
		return data;
	};

	const renderStaticArea = () => {
		const searchEngine = createElement("input", ["search-engine"]);
		const searchButton = createElement("button", ["search-btn"]);
		const searchBox = createElement("div", ["search-box"]);

		searchButton.textContent = "Sprawdź";
		searchBox.append(searchEngine, searchButton);
		body.append(searchBox);
	};
	const renderMainContent = ({
		name,
		main: { temp, humidity, pressure },
		wind: { speed },
		sys: { sunset, sunrise },
		weather,
	}) => {
		const weatherBoxBody = createElement("div", ["body"]);
		const weatherBox = createElement("div", ["container"]);
		const weatherCityName = createElement("h2");
		const weatherStatusImg = createElement("img", ["img"]);
		const weatherBoxHeader = createElement("div", ["header"]);
		const weatherBoxList = createElement("div", ["list"]);

		weatherCityName.textContent = name;
		weatherStatusImg.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
		weatherBoxList.append(
			createListItem("Temperatura", temp),
			createListItem("Wilgotność", humidity),
			createListItem("Ciśnienie", pressure),
			createListItem("Szybkość wiatru", speed, "m/s"),
			createListItem("Wschód słońca", sunrise),
			createListItem("Zachód słońca", sunset)
		);
		weatherBoxHeader.append(weatherStatusImg, weatherCityName);
		weatherBoxBody.append(weatherBoxList);
		weatherBox.append(weatherBoxHeader, weatherBoxBody);

		return weatherBox;
	};
	const createListItem = (text, stat, optionalUnit) => {
		const li = createElement("li");
		const span = createElement("span");

		li.textContent = text;
		span.textContent = `${stat}${optionalUnit ?? ""}`;

		li.append(span);

		return li;
	};
	// helper
	const createElement = (el, cls = []) => {
		const element = document.createElement(el);
		cls.forEach((c) => {
			element.classList.add(c);
		});
		return element;
	};
	renderStaticArea();
});
