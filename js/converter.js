

function input(event) {
let value = event.target.value;
let calc = ((value * (9/5)) + 32)
document.getElementById("display").innerText = Math.ceil(calc);
};

/*function converter(cel) {
let fahrenheit = (cel * (9/5)) + 32
return fahrenheit;
}; */





