document.addEventListener("DOMContentLoaded", function () {
	const userInfo = {
		avatar: document.querySelector(".avatar-img"),
		userFullName: document.querySelector(".full-name"),
	};

	async function loadUser() {
		const response = await fetch("https://randomuser.me/api");
		const data = await response.json();
		const prepared = dataReady(data);
		renderUi(prepared);
	}
	const dataReady = (data) => {
		const result = data.results[0];
		const fullName = `${result.name.title} ${result.name.first} ${result.name.last}`;
		const personPictrue = result.picture.large;

		return {
			fullName,
			personPictrue,
		};
	};
	const renderUi = ({ fullName, personPictrue }) => {
		userInfo.avatar.src = personPictrue;
		userInfo.userFullName.textContent = fullName;
	};

	loadUser();
});
