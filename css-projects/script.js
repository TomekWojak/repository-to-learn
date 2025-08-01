const allBoxes = document.querySelectorAll(".container__box2");
const observer = new IntersectionObserver((elements) => {
	elements.forEach((element) => {
		if (element.isIntersecting) {
			element.target.classList.add("animated");
		} else {
			element.target.classList.remove("animated");
		}
	});
});

allBoxes.forEach((box) => observer.observe(box));
