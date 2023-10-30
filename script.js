// console.log({document});

const h1 = document.querySelector("h1");

function titleChange(newTitle) {
    h1.innerText = newTitle
} 

titleChange("Nirvana Music Shop")

const body = document.querySelector("body");

function backgroundColorChange(newColor) {
    body.style.background = newColor;
}

backgroundColorChange("white")

const address = document.querySelector(".address p");

function newAddress(changedAddress) {
    address.innerText = changedAddress;
}

newAddress("Via Syd Barrett 15, Parma")

const link = document.querySelectorAll("a");

function newColor(color) {
    for(let i=0; i<link.length; i++) {
        link[i].style.color = color;
    }
}

newColor("red")

const img = document.querySelectorAll("img");

function hideImages() {
    if(img[0].style.visibility === "visible") {
        for(let i=0; i<img.length; i++) {
            img[i].style.visibility = "hidden";
        }
    }
    else {
        for(let i=0; i<img.length; i++) {
            img[i].style.visibility = "visible";
        }
    }
}

// hideImages()

const price = document.querySelectorAll(".price");

function priceColorChange() {
    for(let i=0; i<img.length; i++) {
        price[i].style.color = `rgb(
            ${Math.round(Math.random()*255)}, 
            ${Math.round(Math.random()*255)}, 
            ${Math.round(Math.random()*255)} )`
    }
}

// priceColorChange()