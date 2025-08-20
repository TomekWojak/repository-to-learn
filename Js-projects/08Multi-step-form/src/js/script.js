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
		if (index < currentStep) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});

	const activeSteps = document.querySelectorAll(".active");
	progressBar.style.width =
		((activeSteps.length - 1) / (steps.length - 1)) * 100 + "%";
	handleBtnsState();
    handleFormPage()
};
const handleFormPage = () => {
    formPages.forEach(page => {
        if(currentStep == page.dataset.number){
            page.classList.add('active-page')
        }else {
            page.classList.remove('active-page')
        }
    })
}
const handleBtnsState = () => {
	if (currentStep === 1) {
		prevBtn.setAttribute("disabled", "true");
	} else if (currentStep === steps.length) {
		nextBtn.setAttribute("disabled", "true");
	} else {
		prevBtn.removeAttribute("disabled");
		nextBtn.removeAttribute("disabled");
	}
};

nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
