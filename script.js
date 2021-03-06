
// #1 - FOUR BUTTONS

let limeCola = document.getElementById("lime");
let saltedPeanuts = document.getElementById("salted");
let chocolateBar = document.getElementById("chocolate");
let fruitGummies = document.getElementById("fruit");
let total = document.getElementById("total");
let runningTotal = 0;

// create event listener for each button to add price to total
// lime = 2, salted = 3, choc = 4, fruit = 6
// have total update with each click

limeCola.addEventListener("click", () => {
    runningTotal += 2;
    // console.log(runningTotal);
    total.innerText = runningTotal;
});

saltedPeanuts.addEventListener("click", () => {
    runningTotal += 3;
    // console.log(runningTotal);
    total.innerText = runningTotal;
});

chocolateBar.addEventListener("click", () => {
    runningTotal += 4;
    // console.log(runningTotal);
    total.innerText = runningTotal;
});

fruitGummies.addEventListener("click", () => {
    runningTotal += 6;
    // console.log(runningTotal);
    total.innerText = runningTotal;
});


// #2 - MAKE MONEY

let moneyForm = document.getElementById("moneyform");
let numberInput = document.getElementById("numberinput");
let coinType = document.getElementById("cointype");

//submit event
moneyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let typeOfCoin = coinType.value;
    let numberOfCoins = numberInput.value;

    //loop to make new coins based on number and type input
    for (let i = 0; i < numberOfCoins; i++) {
        let coinBlank = document.createElement("div");
        coinBlank.classList.add("coinblank");
        coinBlank.innerText = typeOfCoin;
        moneyForm.append(coinBlank);

        //add listener inside each new coin to allow for deleting
        coinBlank.addEventListener("click", () => {
            coinBlank.remove();
        })
    }
});


// #3 - LIGHT BULB

let btnLightOn = document.getElementById("btn-lighton");
let btnLightOff = document.getElementById("btn-lightoff");
let btnLightToggle = document.getElementById("btn-lighttoggle");
let btnLightEnd = document.getElementById("btn-lightend");
// let lightOn = document.getElementById("lightbulbon");
let lightOff = document.getElementById("lightbulboff");


//turn light on, alter light off default color
btnLightOn.addEventListener("click", () => {
    lightOff.style.backgroundColor = "yellow";
    lightOff.style.color = "black";
});


// turn light off, alter to default off color
btnLightOff.addEventListener("click", () => {
    lightOff.style.backgroundColor = "darkgray";
    lightOff.style.color = "white";
});

// its only working if it is the second button clicked??????
// toggle between light and dark (display the opposite)
btnLightToggle.addEventListener("click", () => {
    if (lightOff.style.backgroundColor === "darkgray") {
        lightOff.style.backgroundColor = "yellow";
        lightOff.style.color = "black";
    } else if (lightOff.style.backgroundColor === "yellow") {
        lightOff.style.backgroundColor = "darkgray";
        lightOff.style.color = "white";
    }
});

// end remove lightbulb div, disable buttons
btnLightEnd.addEventListener("click", () => {
    lightOff.remove();
    btnLightOn.disabled = true;
    btnLightOff.disabled = true;
    btnLightToggle.disabled = true;
    btnLightEnd.disabled = true;
})
