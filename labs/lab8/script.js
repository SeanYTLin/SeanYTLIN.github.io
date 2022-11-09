function toggleTheme(){
    let dark_mode = document.getElementById("body")
    dark_mode.classList.toggle("dark-mode");
}

document.getElementById("toggleButton").onclick = toggleTheme;

