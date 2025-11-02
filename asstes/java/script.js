let bulb = document.querySelector("#bulb");
let onBtn = document.querySelector(".onBtn");
let offBtn = document.querySelector(".offBtn");

function turnOnLight(){
    bulb.src = "./asstes/image/onbulb.png"
}

function turnOffLight(){
    bulb.src = "./asstes/image/offbulb.png"
}

onBtn.addEventListener('click', turnOnLight);
offBtn.addEventListener('click', turnOffLight);


