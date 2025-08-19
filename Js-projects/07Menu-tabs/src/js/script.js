const menuSections = document.querySelectorAll(".menu-section");
const menuTabs = document.querySelectorAll(".menu-tab");
const wrapper = document.querySelector(".wrapper");

function showSection(e) {
	menuTabs.forEach((tab) => tab.classList.remove("menu-tab-active"));

	menuSections.forEach((section) =>
		section.classList.remove("menu-section-active")
	);
	e.target.classList.add("menu-tab-active");
	const clickedBtn = e.target.dataset.btn;
	const clickedSection = wrapper.querySelector(
		`[data-section="${clickedBtn}"]`
	);
	clickedSection.classList.add("menu-section-active");
}

menuTabs.forEach((tab) => tab.addEventListener("click", showSection));
