const presents = document.querySelectorAll(".present");
const boxes = document.querySelectorAll(".box");
const presentsBox = document.querySelector(".present-box");
const chosenBox = document.querySelector(".chosen-box");
const sendBtn = document.querySelector(".send-btn");

presents.forEach((present) => {
	present.addEventListener("dragstart", () => {
		present.classList.add("is-dragged");
	});
	present.addEventListener("dragend", () => {
		present.classList.remove("is-dragged");
	});
});

boxes.forEach((box) => {
	box.addEventListener("dragover", (e) => {
		e.preventDefault();
		const isDragged = document.querySelector(".is-dragged");
		box.append(isDragged);
        handlePresents()
	});
});

const handlePresents = () => {
    const restPresents = presentsBox.querySelectorAll('.present')

    if(chosenBox.childElementCount > 2){
        restPresents.forEach(present => present.setAttribute('draggable', false))
    }
}
