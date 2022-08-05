var today = new Date();

if (today.getDate() < 10) {
    datez = '0' + today.getDate();
}   else {
    datez = today.getDate();
}

if (today.getMonth() < 10) {
    monthz = '0' + today.getMonth();
}   else {
    monthz = today.getMonth() + 1;
}

var date = datez + '.' + monthz + '.' + today.getFullYear();

if (today.getHours() < 10) {
    hrsz = '0' + today.getHours();
}   else {
    hrsz = today.getHours();
}

if (today.getMinutes() < 10) {
    minutesz = '0' + today.getMinutes();
}   else {
    minutesz = today.getMinutes();
}

if (today.getSeconds() < 10) {
    secz = '0' + today.getSeconds();
}   else {
    secz = today.getSeconds();
}

var time = hrsz + ":" + minutesz + ":" + secz;
var dateTime = date+' ' +hrsz + ":" + minutesz;

var h1 = document.getElementsByClassName('time')[0];
var zxc = document.getElementsByClassName('datetime')[0];
h1.textContent = time;
zxc.textContent = dateTime;
