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

const mutationObserver = new MutationObserver((entries) => {
	console.log(entries);
	entries.forEach((entry) => {
		entry.addedNodes.forEach((node) => node.classList.add("test"));
	});
});

allBoxes.forEach((box) =>
	mutationObserver.observe(box, { childList: true, subtree: true })
);

allBoxes.forEach((box) => observer.observe(box));
