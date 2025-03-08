const toggleButton = document.querySelectorAll("#toggleTheme")
const body = document.body
var isClickable = true

toggleButton.forEach(button => {
    button.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    })
})

function ballClick(ball) {
    var curWidth = parseInt(ball.style.width) || 100
    var curHeight = parseInt(ball.style.height) || 100

    var newWidth = curWidth + getRandomInt(20, 60)
    var newHeight = curHeight + getRandomInt(20, 60)

    if (newWidth > 400) {
        newWidth = 100
        newHeight = 100
    }

    ball.style.width = `${newWidth}px`
    ball.style.height = `${newHeight}px`

    ball.textContent = newWidth

    ball.style.backgroundColor = getRandomColor()
}

function ball3Click() {
    if (!isClickable) return
    isClickable = false
    var ball1 = document.querySelector(".ball")
    var ball2 = document.querySelector(".ball2")

    var ball1Width = ball1.offsetWidth
    var ball2Width = ball2.offsetWidth

    var ball1Color = getComputedStyle(ball1).backgroundColor
    var ball2Color = getComputedStyle(ball2).backgroundColor

    ball1.style.backgroundColor = ball2Color
    ball2.style.backgroundColor = ball1Color

    ball1.style.width = `${ball2Width}px`
    ball1.style.height = `${ball2Width}px`

    ball2.style.width = `${ball1Width}px`
    ball2.style.height = `${ball1Width}px`

    ball1.textContent = `${ball2Width}`
    ball2.textContent = `${ball1Width}`

    setTimeout(() => {
        isClickable = true
    }, 2000)
}
