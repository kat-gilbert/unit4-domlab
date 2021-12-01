
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
    console.log(runningTotal);
    total.innerText = runningTotal;
});

saltedPeanuts.addEventListener("click", () => {
    runningTotal += 3;
    console.log(runningTotal);
    total.innerText = runningTotal;
});

chocolateBar.addEventListener("click", () => {
    runningTotal += 4;
    console.log(runningTotal);
    total.innerText = runningTotal;
});

fruitGummies.addEventListener("click", () => {
    runningTotal += 6;
    console.log(runningTotal);
    total.innerText = runningTotal;
});


// #2 - MAKE MONEY
// text input: number
// select: penny, nickel, dime, quarter
// when form submitted, add number of coins to page
// when individual coin is clicked, remove just that coin

//set variables
let moneyForm = document.getElementById("moneyform");
let numberInput = document.getElementById("numberinput");
let coinType = document.getElementById("cointype");


// submit event listener --> attach form to inputs
// add coins to page with add element
moneyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let coin = coinType.value;

    if (coin === "Penny") {
        console.log("it's a penny!");
    }

    else if (coin === "Nickel") {
        console.log("it's a nickel!");
    }

    else if (coin === "Dime") {
        console.log("it's a dime!");
    }

    else if (coin === "Quarter") {
        console.log("it's a quarter!");
    }

    //loop through w/ numberOfCoins.length? and keep displaying
    // append coins to bottom of the moneyForm
    // add name to coin with inner text

});

// append coins to bottom of form
// add name with inner text


//removing coins 






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
