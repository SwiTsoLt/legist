const diplomasList = document.getElementById("diplomasList")
const scrollLeftButton = document.getElementById("scrollLeftButton")
const scrollRightButton = document.getElementById("scrollRightButton")

let scroll = 0

diplomasList.addEventListener("scroll", e => {
    scroll = e.target.scrollLeft
})

scrollLeftButton.addEventListener('click', scrollLeft)
scrollRightButton.addEventListener('click', scrollRight)

function scrollLeft() {
    if (scroll >= 150) {
        diplomasList.scrollLeft = scroll - 150
    } else {
        diplomasList.scrollLeft = 0
    }
}

function scrollRight() {
    if (scroll <= 1050) {
        diplomasList.scrollLeft = scroll + 150
    } else {
        diplomasList.scrollLeft = 1200
    }
}