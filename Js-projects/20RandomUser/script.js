document.addEventListener("DOMContentLoaded", function () {
	fetch("https://randomuser.me/api")
		.then((res) => res.json())
		.then((data) => dataReady(data));



       const dataReady = (data) => {
            
       } 
});
