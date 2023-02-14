const navbar = document.querySelector("nav")
const handle_button = document.getElementById("handle_button")

handle_button.addEventListener("click", () => {
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show")
        handle_button.classList.remove("active")
    } else {
        navbar.classList.add("show")
        handle_button.classList.add("active")
    }
})