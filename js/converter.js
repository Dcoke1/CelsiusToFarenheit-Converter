
/*----Takes users numeric input converts it to farenheit value then displays to display div in HTML ----*/
let input = (event) => {
let value = event.target.value;
let calc = ((value * (9/5)) + 32)
document.getElementById("display").innerText = Math.ceil(calc);
};




