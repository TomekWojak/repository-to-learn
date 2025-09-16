const films = document.querySelector(".films");

const animateFilms = () => {
	const allFilms = films.querySelectorAll("li img");
	allFilms.forEach((film, index) => {
		film.style.viewTransitionName = `movie-${index}`;
	});
	console.log(allFilms);
};

animateFilms();
