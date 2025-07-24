function createPasswordManager(password) {
	let pass = password;
	console.log(pass);

	return {
		check(yourPass) {
			return yourPass === pass;
		},
		change(newPassword) {
			pass = newPassword;
		},
	};
}

const manager = createPasswordManager("tajne123");

console.log(manager.check("tajne123"));
manager.change("noweHasło");

console.log(manager.check("tajne123"));
console.log(manager.check("noweHasło"));
