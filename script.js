const cardSpace = document.getElementsByClassName("cardSpace")[0];

for (i = 0; i < 41; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    cardSpace.appendChild(card);

    const textArea = document.createElement("a");
    textArea.setAttribute("href", "#");

    card.appendChild(textArea);

    const h2 = document.createElement("h2");
    h2.textContent = "Super Cool Project";

    const p = document.createElement("p");
    p.textContent = "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec.";

    textArea.appendChild(h2);
    textArea.appendChild(p);

    const interactionMenu = document.createElement("div");
    interactionMenu.classList.add("interactionMenu");

    card.appendChild(interactionMenu);

    const interactionButton = document.createElement("a");
    interactionButton.setAttribute("href", "#");

    const button = document.createElement("img");
    button.setAttribute("src", "./icon/star-plus-outline.svg");

    interactionButton.appendChild(button);
    interactionMenu.appendChild(interactionButton);

    const interactionButton2 = document.createElement("a");
    interactionButton2.setAttribute("href", "#");

    const button2 = document.createElement("img");
    button2.setAttribute("src", "./icon/eye-plus-outline.svg");

    interactionButton2.appendChild(button2);
    interactionMenu.appendChild(interactionButton2);

    const interactionButton3 = document.createElement("a");
    interactionButton3.setAttribute("href", "#");

    const button3 = document.createElement("img");
    button3.setAttribute("src", "./icon/source-fork.svg");

    interactionButton3.appendChild(button3);
    interactionMenu.appendChild(interactionButton3);
};


const header = document.getElementById("main-header");
const placeholder = document.getElementById("header-placeholder");

function updatePlaceholderHeight() {
    placeholder.style.height = `${header.offsetHeight}px`;

    header.style.height = `${placeholder.offsetHeight}px`;
    header.style.width = `${placeholder.offsetWidth}px`;
}

window.addEventListener("load", updatePlaceholderHeight);
window.addEventListener("resize", updatePlaceholderHeight);