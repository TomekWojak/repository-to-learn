const formPages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentStep = 1;

const handleNextBtn = () => {
	currentStep = Math.min(currentStep + 1, steps.length);
	handleProgressBar();
};
const handlePrevBtn = () => {
	currentStep = Math.max(currentStep - 1, 0);
	handleProgressBar();
};

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		console.log(currentStep);
		console.log(index);
		if (index < currentStep) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});

	const activeSteps = document.querySelectorAll(".active");
	
};
nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
