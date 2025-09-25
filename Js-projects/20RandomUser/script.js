document.addEventListener("DOMContentLoaded", function () {
	const userInfo = {
		avatar: document.querySelector(".avatar-img"),
		userFullName: document.querySelector(".full-name"),
		userName: document.querySelector(".username"),
		email: document.querySelector(".email"),
		country: document.querySelector(".country"),
	};

	async function loadUser() {
		const response = await fetch("https://randomuser.me/api");
		const data = await response.json();
		const prepared = dataReady(data);
		renderUi(prepared);
	}
	const dataReady = (data) => {
		const result = data.results[0];
		const userData = [result].map((obj) => {
			return {
				fullName: `${obj.name.title} ${obj.name.first} ${obj.name.last}`,
				personPicture: obj.picture.large,
				username: obj.login.username,
				email: obj.email,
				country: obj.location.country,
			};
		});
		console.log(result);
		return userData[0];
	};

	const renderUi = ({ fullName, personPicture, username, email, country }) => {
		userInfo.avatar.src = personPicture;
		userInfo.userFullName.textContent = fullName;
		userInfo.userName.textContent = `@${username}`;
		userInfo.email.textContent = email;
		userInfo.country.textContent = country;
	};

	loadUser();
});
