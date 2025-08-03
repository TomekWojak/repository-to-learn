const settings = document.querySelector(".counter-app__settings");
const settingsBtn = document.querySelector(".counter-app__settings-btn");
const imageSection = document.querySelector(".counter-app__image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".counter-app__number--days");
const hoursCount = document.querySelector(".counter-app__number--hours");
const minutesCount = document.querySelector(".counter-app__number--minutes");
const secondsCount = document.querySelector(".counter-app__number--seconds");

const saveBtn = document.querySelector(".counter-app__save");
const eventSpan = document.querySelector(".event");
let usersTime;

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	imageSection.style.backgroundImage = `url('${eventImg.value}')`;
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	console.log(usersTime);
};

settingsBtn.addEventListener("click", () => {
	settings.classList.toggle("active");
});
saveBtn.addEventListener("click", appUpdate);
