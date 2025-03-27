// CACHE DOM Elements in variables
const body = document.querySelector("body");
const css = document.querySelector("h3");
const form = document.forms[0];
const random = document.getElementById("random");
let linearDiv = document.getElementById("linearDiv");
let radialDiv = document.getElementById("radialDiv");

// Form input variables
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let lRadio = document.getElementById("linear");
let rRadio = document.getElementById("radial");
let type = form.elements['type'];
let direction = document.getElementById("direction");
let size = document.getElementById("size");
let x = document.getElementById("x");
let y = document.getElementById("y");

// Initial values
let details = `to ${direction.value}`;
let background;

// Declare functions
const setGradient = () => {
    console.log('3', color1.value, color2.value);
    switch (type.value) {
        case "linear": {
            linearDiv.style.display = "block";
            radialDiv.style.display = "none";
            details = `to ${direction.value}`;
            setBackground();
            break;
        }
        case "radial": {
            radialDiv.style.display = "block";
            linearDiv.style.display = "none";
            details = `${size.value} at ${x.value}% ${y.value}%`;
            setBackground();            
            break;
        }
    }

    css.innerText = background;
    body.style.background = background;
}

const setBackground = () => {
    return background = `${type.value}-gradient(${details}, ${color1.value}, ${color2.value})`;    
}

const randomiser = (event) => {
    console.log('0', color1.value, color2.value)
    
    randomise(color1);
    randomise(color2);

    color1Val = color1.value;
    color2Val = color2.value;

    console.log('1', color1Val, color2Val);

    event.preventDefault();

    return { color1Val, color2Val };
}

const randomise = (color) => {

    console.log('2', color.value);
    
    return color.value = randomHex();
}

const randomHex = () => {
    let result = [];
    let chars = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        result.push(chars.charAt(Math.floor(Math.random() * 16)))
    }
    return ("#" + result.join(''));
}

// Event Listeners
window.addEventListener("load", setGradient)

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

lRadio.addEventListener("input", setGradient)
direction.addEventListener("input", setGradient)

rRadio.addEventListener("input", setGradient)
size.addEventListener("input", setGradient)
x.addEventListener("input", setGradient)
y.addEventListener("input", setGradient)

random.addEventListener("click", randomiser)
random.addEventListener("click", setGradient)
