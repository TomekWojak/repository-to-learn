const btn = document.querySelector(".nav__search-btn");
const input = document.querySelector(".nav__search-input");

const showSearchBar = () => {
	input.classList.toggle("active");
};
btn.addEventListener("click", showSearchBar);
