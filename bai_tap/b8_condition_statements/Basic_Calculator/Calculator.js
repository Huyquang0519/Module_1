function setValue(char) {
    let screen = document.getElementById("screen");
    screen.value += char;
}

function result() {
    let screen = document.getElementById("screen");
    screen.value = eval(screen.value);
}

function clearScreen() {
    let display = document.getElementById("screen");
    display.value = "";
}