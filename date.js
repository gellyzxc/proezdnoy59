var today = new Date();
var h1 = document.getElementsByClassName('date')[0];
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
h1.textContent = today;

