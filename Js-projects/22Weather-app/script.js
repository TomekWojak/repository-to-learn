document.addEventListener("DOMContentLoaded", function () {
	const body = document.body;

	navigator.geolocation.getCurrentPosition((position) => {
		// loadWeatherDataBasedOnUserPosition(position);
	});

	const renderUI = () => {
		const container = renderMainContent();
		body.append(container.searchBox, container.weatherBox);
	};
	const renderMainContent = () => {
		const searchEngine = createElement("input", ["search-engine"]);
		const searchButton = createElement("button", ["search-btn"]);
		const searchBox = createElement("div", ["search-box"]);
        
		const weatherBox = createElement("div", ["container"]);
		const weatherCityName = createElement("h2");
		const weatherStatusImg = createElement("img", ["img"]);
		const weatherBoxHeader = createElement("div", ["header"]);
		const weatherBoxBody = createElement("div", ["list"]);
		const listItems = [];

		searchBox.append(searchEngine, searchButton);

		for (let i = 0; i <= 7; i++) {
			const li = createElement("li");
			const span = createElement("span");

			li.append(span);

			listItems.push(li);
		}

		return {
			searchBox,
			weatherBox,
		};
	};

	// helper
	const createElement = (el, cls = []) => {
		const element = document.createElement(el);
		cls.forEach((c) => {
			element.classList.add(c);
		});
		return element;
	};
	renderUI();
});
