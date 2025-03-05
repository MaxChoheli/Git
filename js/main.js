const toggleButton = document.getElementById("toggleTheme")
const body = document.body
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})

function ballClick() {
    var ball = document.querySelector(".ball")
    var curWidth = parseInt(ball.style.width) || 100
    var curHeight = parseInt(ball.style.height) || 100

    var newWidth = curWidth + 50
    var newHeight = curHeight + 50

    ball.style.width = `${newWidth}px`
    ball.style.height = `${newHeight}px`

    ball.textContent = newWidth
}