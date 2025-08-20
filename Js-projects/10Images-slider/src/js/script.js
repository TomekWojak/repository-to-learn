const sliderBox = document.querySelector(".slider-box");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const carousellImages = document.querySelectorAll(".slider-img");
const carousellWidth = 800;
const carousellSpeed = 3000;

let index = 0;

const handleCarousell = () => {
	index++;
	changeImage();
};

let startCarousell = setInterval(handleCarousell, carousellSpeed);
const changeImage = () => {
	if (index > carousellImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carousellImages.length - 1;
	}
	sliderBox.style.transform = `translateX(${-index * carousellWidth}px)`;
};
const resetInterval = () => {
	clearInterval(startCarousell);
	startCarousell = setInterval(handleCarousell, carousellSpeed);
};
const handleRightArrow = () => {
	index++;
	changeImage();
	resetInterval();
};
const handleLeftArrow = () => {
	index--;
	changeImage();
	resetInterval();
};
rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);
