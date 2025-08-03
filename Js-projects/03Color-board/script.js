const box = document.querySelector(".box");
const speedBtns = document.querySelectorAll('[data-setting="speed"]');
const colorBtns = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector(".slider-info");
const squares = 546;
let sliderValue = 70;
let range = 200;

const createSquares = (speed) => {
	box.innerHTML = "";
	for (let i = 0; i < squares; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		box.append(square);
		square.style.transitionDuration = speed;

		square.addEventListener("mouseover", () => {
			setColor(square);
		});
		square.addEventListener("mouseout", () => {
			removeColor(square);
		});
	}
};
const setColor = (square) => {
	let h;

	if (range === 360) {
		h = Math.floor(Math.random() * 360);
	} else {
		h = Math.floor(Math.random() * 60) + range;
	}

	const s = slider.value + `%`;
	const l = "50%";

	square.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
};

const removeColor = (square) => {
	square.style.backgroundColor = "transparent";
};

const handleSpeed = (e) => {
	const newSpeed = e.target.dataset.speed + "s";
	createSquares(newSpeed);
};

const handleColorRange = (e) => {
	range = parseInt(e.target.dataset.colorRange);
};

const showSliderInfo = () => {
	sliderInfo.textContent = slider.value;
};

slider.addEventListener("mousemove", showSliderInfo);
slider.addEventListener("input", showSliderInfo);
speedBtns.forEach((btn) => btn.addEventListener("click", handleSpeed));
colorBtns.forEach((btn) => btn.addEventListener("click", handleColorRange));
createSquares();
