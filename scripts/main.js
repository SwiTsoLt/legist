const navbar = document.querySelector("nav")
const consultationLine = document.getElementById("consultationLine")
const toggleButton = document.getElementById("toggleButton")

toggleButton.addEventListener("click", () => {
    navbar.classList.contains('active')
        ? navbar.classList.remove('active')
        : navbar.classList.add('active')
})

function resizeNavbar() {
    consultationLine.style.top = ((180 - window.pageYOffset) > 0 ? 180 - window.pageYOffset : 0) + "px"
    console.log(consultationLine.style.top);

    if (window.pageYOffset > 100) {
        navbar.classList.add("onscroll")
    } else {
        navbar.classList.remove("onscroll")
    }
}

window.addEventListener("scroll", resizeNavbar)
resizeNavbar()