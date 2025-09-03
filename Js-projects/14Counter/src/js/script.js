const counterItems = document.querySelectorAll(".counter");
const counterBox = document.querySelector(".counter-box");

const options = {
	rootMargin: "-250px",
};
const startCounter = (entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			counterItems.forEach((counter) => {
				updateCounter(counter);
			});
		}
	}
};

const updateCounter = (counter) => {
	const finalNumber = counter.dataset.number;
	const value = parseInt(counter.textContent);

	const speed = finalNumber / 300

	if (value < finalNumber) {
		counter.textContent = `${Math.floor(value + speed)}`;
		setTimeout(() => {
			updateCounter(counter);
		}, 1);
	} else {
		counter.textContent = finalNumber;
	}
};

const observer = new IntersectionObserver(startCounter, options);

observer.observe(counterBox);
