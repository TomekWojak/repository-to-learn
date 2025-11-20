const navigteTo = (url) => {
	history.pushState(null, null, url);
	router;
};
const router = async () => {
	const routes = [
		{ path: "/", view: () => console.log("Main page") },
		{ path: "/posts", view: () => console.log("Posts") },
		{ path: "/settings", view: () => console.log("Settings") },
	];

	const potentialMatches = routes.map((route) => {
		return {
			route,
			isMatching: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.isMatching
	);

	if (!match) {
		match = {
			route: routes[0],
			isMatching: true,
		};
	}
	match.route.view();
};

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener('click', (e) => {
		// delegacja zdarzeń, zastosowana po to żeby dla wszystkich nowych linków działały listenery
		e.preventDefault()
		if(e.target.matches('.nav__link')){
			console.log(e);
		}
	})
	router();
});
