const navbar = document.querySelector("nav")
const toggleButton = document.getElementById("toggleButton")

toggleButton.addEventListener("click", () => {
    navbar.classList.contains('active')
        ? navbar.classList.remove('active')
        : navbar.classList.add('active')
})

const resizeNavbar = () => {
    if (window.innerWidth > 1000 && window.pageYOffset > 50) {
        navbar.classList.add("onscroll")
    } else {
        navbar.classList.remove("onscroll")
    }
}

window.addEventListener("scroll", resizeNavbar)
resizeNavbar()