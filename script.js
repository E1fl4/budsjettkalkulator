let inputs = document.querySelectorAll("input")
for (let i in inputs) {
    inputs[i].onkeydown = (e) => {
        if (e.code.includes("Digit") || e.code == "Backspace") return true;
        return false;
    };
}
