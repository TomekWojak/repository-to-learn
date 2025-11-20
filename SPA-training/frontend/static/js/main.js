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
	console.log(potentialMatches);

	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.isMatching
	);

	if (!match) {
		match = {
			route: routes[0],
			isMatching: true,
		};
	}
	console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
	router();
});
