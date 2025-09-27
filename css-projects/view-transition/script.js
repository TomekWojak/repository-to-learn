const films = document.querySelector(".films");
const filmBtn = document.querySelector("svg.film");
const animateFilms = () => {
	const allFilms = films.querySelectorAll(".rest img");
	allFilms.forEach((film, index) => {
		film.style.viewTransitionName = `movie-${index}`;
	});

	document.startViewTransition(() => {
		films.classList.toggle("column");
	});
};

filmBtn.addEventListener("click", animateFilms);
