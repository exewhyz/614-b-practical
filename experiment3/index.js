const checkbox = document.querySelector('input[type="checkbox"]');
const html = document.querySelector("html");

function toggleDarkMode() {
  html.classList.toggle("dark");
}

checkbox.addEventListener("change", toggleDarkMode);
