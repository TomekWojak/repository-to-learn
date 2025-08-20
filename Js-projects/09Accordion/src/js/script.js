const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle("active");
	}
}

const closeAccordionItems = () => {
	const allActive = document.querySelectorAll(".accordion-info");
	allActive.forEach((item) => item.classList.remove("active"));
};

const clickedOutside = (e) => {
	if (
		e.target.classList.contains("accordion-btn") ||
		e.target.classList.contains("accordion-info") ||
		e.target.classList.contains("accordion-info-text")
	) {
		return;
	}

	closeAccordionItems();
};
accordionBtns.forEach((btn) =>
	btn.addEventListener("click", openAccordionItems)
);
window.addEventListener("click", clickedOutside);
