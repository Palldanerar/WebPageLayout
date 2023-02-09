const menu = document.querySelector("#menu")
const btn = document.querySelector(".burger")

btn.addEventListener("click", () => {
    btn.classList.toggle("active")
    menu.classList.toggle("hidden")
    menu.classList.toggle("flex")
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const themeBtn = document.querySelector("#theme")

themeBtn.addEventListener("click", () => {
    document.querySelector("html").classList.toggle("dark")

    if(document.querySelector("html").classList.contains("dark")) {
        localStorage.theme = "dark"
    } else {
        localStorage.theme = "light"
    }
})