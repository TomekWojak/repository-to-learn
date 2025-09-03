const img = document.querySelector("img");

const zoomImg = (e) => {
	const x = e.clientX;
	const y = e.clientY;

	const imgX = img.offsetLeft;
	const imgY = img.offsetTop;

	img.classList.add("zoom-img");

	const newX = x - imgX;
	const newY = y - imgY;

    img.style.transformOrigin = `${newX}px ${newY}px`
};
const resetImg = () => {
	img.classList.remove("zoom-img");
};

img.addEventListener("mousemove", zoomImg);
img.addEventListener("mouseout", resetImg);
