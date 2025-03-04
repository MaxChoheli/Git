const toggleButton = document.getElementById("toggleTheme")
const body = document.body
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})

function ballClick() {
    console.log("ball has been clicked")
}