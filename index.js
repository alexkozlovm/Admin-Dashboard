// General query selectors
const body = document.querySelector("body");
const nav = document.querySelector("nav");

// Theme switcher
const sliderCircle = document.querySelector(".slider .circle ");
const slider = document.querySelector("input[type='checkbox']");

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
if (systemSettingDark.matches) darkTheme();

slider.addEventListener('change', choseTheme)

function choseTheme() {
    if (slider.checked) {
        darkTheme();
    } else {
        lightTheme();
    }
}

function lightTheme() { 
    slider.checked = false;
    body.classList.remove("dark");
}

function darkTheme() {
    slider.checked = true;
    body.classList.add("dark");
}
