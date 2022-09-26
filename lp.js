var h31 = document.getElementsByClassName('numberz')[0];
var h2 = document.getElementsByClassName('busnumber')[0];
var h3 = document.getElementsByClassName('summ')[0];
var h4 = document.getElementsByClassName('count')[0];

window.onload = function() {
    var busnumber = prompt("busnumber");
    var number = prompt("number");
    var count = prompt("count");

    h31.textContent = number;
    h2.textContent = busnumber.toUpperCase() + "159";
    h3.textContent = count * 33;
    h4.textContent = count;
}

