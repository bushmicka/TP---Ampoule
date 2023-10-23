const button = document.querySelector("button");
const light = document.querySelector(".light");
button.addEventListener("click", () => {
	if (light.style.display == "none") {
		light.style.display = "block";
	} else {
		light.style.display = "none";
	}
});
