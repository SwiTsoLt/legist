const consultationLine = document.getElementById("consultationLine")

function resizeLine() {
    consultationLine.style.top = ((180 - window.pageYOffset) > 0 ? 180 - window.pageYOffset : 0) + "px"   
}

window.addEventListener("scroll", resizeLine)
resizeLine()