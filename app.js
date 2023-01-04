let monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

let date = new Date();
let day = date.getDate();
let monthNumber = date.getMonth();
let currentYear = date.getFullYear();

let dates = document.getElementById("dates");
let month = document.getElementById("month");
let years = document.getElementById("year");

let prevMonthDOM = document.getElementById("prev-month");
let nextMonthDOM = document.getElementById("next-month");

years.textContent = currentYear.toString();
month.textContent = monthNames[monthNumber];
