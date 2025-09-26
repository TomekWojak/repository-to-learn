document.addEventListener("DOMContentLoaded", function () {
	navigator.geolocation.getCurrentPosition((position) => {
		// loadWeatherDataBasedOnUserPosition(position);
	});

	const renderUI = () => {
		const weatherBox = createElement("div", ["container"]);

	};
    
	const createElement = (el, cls = []) => {
		const element = document.createElement(el);
		cls.forEach((c) => {
			element.classList.add(c);
		});
		return element;
	};
	renderUI();
});
