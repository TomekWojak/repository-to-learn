const textArea = document.querySelector("textarea");
const chars = document.querySelector(".chars");
const words = document.querySelector(".words");
const sentences = document.querySelector(".sentences");

textArea.addEventListener("input", () => {
	const data = textArea.value.trim();
	const numCharacters = data.length;
	const numWords = data.replace(/[\r\n]/g, " ").split(" ");
	const numSentences = data.split(".");

	chars.textContent = numCharacters;
	words.textContent = numWords.length;
	console.log(numSentences);
	sentences.textContent = numSentences.length - 1;
});
