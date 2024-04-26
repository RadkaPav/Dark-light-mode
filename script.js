const switcher = document.querySelector('.switch input')
const themeText = document.querySelector('.switcher-description p')
const themeIcon = document.querySelector('.switcher-description i')

const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        themeText.textContent = "Dark mode"
        themeIcon.classList.replace("fa-sun", "fa-moon")
    } else {
        document.documentElement.setAttribute("data-theme", "light")
        themeText.textContent = "Light mode"
        themeIcon.classList.replace("fa-moon", "fa-sun")
    }
}

switcher.addEventListener("change", switchTheme)