const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");

let isClicked = false;

function handleCookieBox() {
	cookieBox.classList.add("hide");

	saveUserChoice();
}
function saveUserChoice() {
	isClicked = true;
	localStorage.setItem("cookie", isClicked);
}

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");

	if (!cookieEaten) return console.error("Nie znaleziono wyboru użytkownika");

	cookieBox.classList.add("hide");
};

showCookie();
cookieBtn.addEventListener("click", handleCookieBox);
