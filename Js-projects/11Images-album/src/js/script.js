const body = document.body;
const cards = document.querySelectorAll(".card");

function showCard() {
	cards.forEach((card) => {
		card.classList.remove("active");
	});
	this.classList.add("active");
	const season = this.dataset.season;
	body.dataset.bg = season;
}

cards.forEach((card) => card.addEventListener("click", showCard));
