for (let i in document.querySelectorAll("input")) {
    document.querySelectorAll("input")[i].onkeydown = (e) => {
        if (e.code == "Enter") document.querySelectorAll("input")[i].blur();
        return (e.code.includes("Digit") || e.code == "Backspace");
    };
}

let inntekter = [
    {
        tall: document.querySelector("input")
    }
];
let utgifter = [];

function calc() {
    let total = 0;
    for (let i in inntekter) total += parseInt(inntekter[i].tall.value || 0);
    for (let i in utgifter) total -= parseInt(utgifter[i].tall.value || 0);
    document.querySelector(".total").innerText = total;
    if (document.querySelector(".total").innerText == "NaN") {
        document.querySelector(".total").innerText = "baNaN";
    }
}

document.querySelector("input").addEventListener("focusout", calc);

function nyInntekt() {
    let inntekt = {
        div: document.createElement("div"),
        tekst: document.createElement("p"),
        navnInput: document.createElement("input"),
        tall: document.createElement("input")
    };
    inntekt.div.classList.add("inntekt");

    inntekt.tekst.classList.add("inntekt-tekst");
    inntekt.tekst.style.display = "none";

    inntekt.navnInput.type = "text";
    inntekt.navnInput.value = "Inntekt " + (document.querySelectorAll(".inntekt-container > *").length + 1);
    inntekt.navnInput.addEventListener("keydown", (e) => {
        if (e.code == "Enter") inntekt.navnInput.blur();
    });
    inntekt.navnInput.addEventListener("focusout", () => {
        inntekt.tekst.innerText = inntekt.navnInput.value;
        inntekt.navnInput.style.display = "none";
        inntekt.tekst.style.display = "block";
    });

    inntekt.tall.type = "text";
    inntekt.tall.onkeydown = (e) => {
        if (e.code == "Enter") inntekt.tall.blur();
        return (e.code.includes("Digit") || e.code == "Backspace");
    };
    inntekt.tall.addEventListener("focusout", calc);
    inntekt.div.appendChild(inntekt.tekst);
    inntekt.div.appendChild(inntekt.navnInput);
    inntekt.div.appendChild(inntekt.tall);
    document.querySelector(".inntekt-container").appendChild(inntekt.div);
    inntekt.navnInput.focus();
    inntekt.navnInput.select();
    inntekter.push(inntekt);
}

function nyUtgift() {
    let utgift = {
        div: document.createElement("div"),
        tekst: document.createElement("p"),
        navnInput: document.createElement("input"),
        tall: document.createElement("input")
    };
    utgift.div.classList.add("utgift");

    utgift.tekst.classList.add("utgift-tekst");
    utgift.tekst.style.display = "none";

    utgift.navnInput.type = "text";
    utgift.navnInput.value = "Utgift " + (document.querySelectorAll(".utgift-container > *").length + 1);
    utgift.navnInput.addEventListener("keydown", (e) => {
        if (e.code == "Enter") utgift.navnInput.blur();
    });
    utgift.navnInput.addEventListener("focusout", () => {
        utgift.tekst.innerText = utgift.navnInput.value;
        utgift.navnInput.style.display = "none";
        utgift.tekst.style.display = "block";
    });

    utgift.tall.type = "text";
    utgift.tall.onkeydown = (e) => {
        if (e.code == "Enter") utgift.tall.blur();
        return (e.code.includes("Digit") || e.code == "Backspace");
    };
    utgift.tall.addEventListener("focusout", calc);
    utgift.div.appendChild(utgift.tekst);
    utgift.div.appendChild(utgift.navnInput);
    utgift.div.appendChild(utgift.tall);
    document.querySelector(".utgift-container").appendChild(utgift.div);
    utgift.navnInput.focus();
    utgift.navnInput.select();
    utgifter.push(utgift);
}

document.querySelector(".inntekt-btn").addEventListener("click", nyInntekt);
document.querySelector(".utgift-btn").addEventListener("click", nyUtgift);
