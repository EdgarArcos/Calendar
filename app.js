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

prevMonthDOM.addEventListener("click",()=>lastMonth());
nextMonthDOM.addEventListener("click",()=>nextMonth());

writeMonth(monthNumber)

function writeMonth(month){
    for (let i = 1; i <= getTotalDays(month); i++) {
        dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
    }
}

function getTotalDays(){
    if (monthNumber === -1)monthNumber =11
    if (monthNumber == 0 || monthNumber == 2 || monthNumber == 4 || monthNumber == 6 || monthNumber == 7 || monthNumber == 9 || monthNumber == 11) {
        return  31;
    } else if (monthNumber == 3 || monthNumber == 5 || monthNumber == 8 || monthNumber == 10) {
        return 30;
    } else {
        return isLeap() ? 29:28;
    }
}

function isLeap (){
    return((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0)) 
}
function startDay(){
    let start = new Date(currentYear,monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth(){
    if (monthNumber !== 0) {
        monthNumber--;
    }else{
        monthNumber = 11
        currentYear--
    }
    setNewDate()
}

function nextMonth(){
    if (monthNumber !== 11) {
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }
    setNewDate()
}

function setNewDate(){
    date.setFullYear(currentYear,monthNumber,day);
    month.textContent = monthNames[monthNumber];
    years.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}