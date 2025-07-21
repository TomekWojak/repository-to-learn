const osoba = {
	imie: "Kuba",
	wiek: 25,
	hobby: ["programowanie", "muzyka", "bieganie"],
};

const name = osoba.imie
const wiek = osoba.wiek

const test = [...osoba.hobby]
test.push('czytanie')
console.log(name, wiek, test);