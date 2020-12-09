let htmlElements;
let divs = [];
let spans = [];
let firstdiv = document.querySelector("div.hello-world");
let buttons = document.querySelectorAll("button.delete-button");
let adbutton = document.getElementById("add-button")
let itemsArray = [{
        textColor: 'white',
        bgColor: 'blue',
    },
    {
        textColor: 'black',
        bgColor: 'yellow',
    },
    {
        textColor: 'green',
        bgColor: 'whitesmoke',
    },

];

function init() {
    htmlElements = {
        bgColorInput: document.querySelector("input.bg-color-input"),
        textColorInput: document.querySelector("input.text-color-input"),
        addButton: document.querySelector("button.add-button"),
        items: document.querySelector("div.items"),
    };
    for (let i = 0; i < itemsArray.length; i++) {
        renderElement(itemsArray[i].bgColor, itemsArray[i].textColor)
    }
}


init();



function validation(color) {
    if (color.indexOf("rgb") > -1 || color === "") {
        return false;
    } else {
        return true
    }
}

bgColorInput.onblur = function() {
    if (validation(this.value) === false) {
        this.classList.add("error");
        bgColorInput.focus();
    } else {
        this.classList.remove("error");
    }
};

txtColorInput.onblur = function() {
    if (validation(this.value) === false) {
        this.classList.add("error");
        txtColorInput.focus();
    } else {
        this.classList.remove("error");
    }
};


function validTextColour(stringToTest) {
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}

function renderElement(bgColor, textColor) {
    const element = document.querySelector(".items");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");

    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.style.background = bgColor;
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    span.innerText = textColor;
    span.style.color = textColor;
    element.appendChild(div);
    button.addEventListener("click", deleteElementsClicked);
    div.addEventListener("click", () => changeColors(bgColor, textColor));
}


function isUnique(bgColor, textColor) {
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].textColor === textColor && itemsArray[i].bgColor === bgColor) {
            return false;
        }
    }
    return true;
}

function render() {
    const bgColorInput = htmlElements.bgColorInput.value;
    const textColorInput = htmlElements.textColorInput.value;
    if ((validTextColour(bgColorInput) && validTextColour(textColorInput) && isUnique(bgColorInput, textColorInput))) {

        itemsArray.push({ textColor: textColorInput, bgColor: bgColorInput });
        renderElement(bgColorInput, textColorInput);
        document.getElementById("bgColorInput").style.borderColor = "";
        document.getElementById("txtColorInput").style.borderColor = "";
    } else {

        alert("Ошибка!");
        document.getElementById("bgColorInput").style.borderColor = "red";
        document.getElementById("txtColorInput").style.borderColor = "red";
    }
}

function changeColors(bgColor, textColor) {
    document.body.style.background = bgColor;
    firstdiv.style.color = textColor;
}

function deleteElementsClicked() {
    let buttons = document.querySelectorAll("button.delete-button");
    let index = Array.from(buttons).indexOf(this);
    itemsArray.splice(index, 1);
    document.querySelector(".items").childNodes[index].remove();
}