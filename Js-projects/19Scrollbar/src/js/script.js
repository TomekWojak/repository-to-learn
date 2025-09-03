const backToTop = document.querySelector(".scroll-to-top");
const root = document.documentElement;

const handleScrollBar = () => {
	const windowScroll = window.scrollY;
	const maxScroll =
		document.body.getBoundingClientRect().height - window.innerHeight;

	const scrollWidth = Math.floor((windowScroll / maxScroll) * 100);

	root.style.setProperty("--scroll-width", scrollWidth + "%");

	if (scrollWidth > 50) {
		backToTop.classList.add("active");
	} else {
		backToTop.classList.remove("active");
	}
};
const scrollToTop = () => {
	window.scroll({
        top: 0,
        behavior: "smooth",
    })
};

window.addEventListener("scroll", handleScrollBar);
backToTop.addEventListener("click", scrollToTop);
