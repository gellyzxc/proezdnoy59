var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

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
var dateTime = date+' '+time;

var h1 = document.getElementsByClassName('time')[0];
h1.textContent = time;