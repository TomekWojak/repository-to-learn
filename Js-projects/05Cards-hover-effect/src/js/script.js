const cards = document.querySelectorAll(".container__card");

const handleHoverEffect = (e, card) => {
	const cardPosX = e.clientX;
	const cardPosY = e.clientY;

	const elementPosX = cardPosX - card.offsetLeft;
	const elementPosY = cardPosY - card.offsetTop;

	card.style.setProperty("--posX", elementPosX + "px");
	card.style.setProperty("--posY", elementPosY + "px");
};

cards.forEach((card) =>
	card.addEventListener("mousemove", (e) => {
		handleHoverEffect(e, card);
	})
);
