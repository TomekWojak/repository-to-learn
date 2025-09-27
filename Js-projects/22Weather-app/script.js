document.addEventListener("DOMContentLoaded", function () {
	const body = document.body;
	const API_KEY = "fd20a8f36de3b6b0b81a08368b2a2d08";
	const LOCATION_URL = "https://api.openweathermap.org/data/2.5/weather?";
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			const userCityInfo = await loadWeatherDataBasedOnUserPosition(position);
			body.append(renderMainContent(userCityInfo));
		});
	}
	const loadWeatherDataBasedOnUserPosition = async (position) => {
		try {
			const response = await fetch(
				`${LOCATION_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=pl&appid=${API_KEY}&units=metric`
			);
			const data = await response.json();
			return data;
		} catch {
			console.log("Błąd ładowania danych");
		}
	};
	const loadWeatherData = async (cityName) => {
		try {
			const response = await fetch(
				`${LOCATION_URL}q=${cityName}&appid=${API_KEY}&units=metric`
			);
			if (!response.ok) return alert("Błędna nazwa miasta lub państwa");
			const data = await response.json();

			body.append(renderMainContent(data));
		} catch (error) {
			console.error("error", error);
		}
	};
	const renderStaticArea = () => {
		const searchEngine = createElement("input", ["search-engine"]);
		const searchButton = createElement("button", ["search-btn"]);
		const searchBox = createElement("div", ["search-box"]);

		searchButton.textContent = "Sprawdź";
		searchBox.append(searchEngine, searchButton);
		body.append(searchBox);

		searchButton.addEventListener("click", () => {
			checkWeather(searchEngine);
		});
	};
	const checkWeather = (input) => {
		const inputValue = input.value.trim();
		if (inputValue === "") return alert("Pole nie może być puste");

		input.value = "";
		loadWeatherData(inputValue);
	};
	const renderMainContent = ({
		name,
		main: { temp, humidity, pressure },
		wind: { speed },
		sys: { sunset, sunrise },
		clouds: { all },
		weather,
	}) => {
		document.querySelector(".container")?.remove();

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
			createListItem("Zachmurzenie", all, "%"),
			createListItem("Szybkość wiatru", speed, "m/s"),
			createListItem(
				"Wschód słońca",
				`${new Date(sunrise * 1000).getHours()}:${new Date(
					sunrise * 1000
				).getMinutes()}` // * 1000 ponieważ zazwyczaj api pogodowe dostarczają dane w timestamp
			),
			createListItem(
				"Zachód słońca",
				`${new Date(sunset * 1000).getHours()}:${new Date(
					sunset * 1000
				).getMinutes()}`
			)
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
