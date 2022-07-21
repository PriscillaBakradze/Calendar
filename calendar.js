"use strict";

const date = new Date();

const render = () => {
    date.setDate(1);
    let year = date.getFullYear();
    const monthDays = document.querySelector(".date");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
    
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.querySelector(".full-date h2").innerHTML = months[date.getMonth()];
    document.querySelector(".full-date h3").innerHTML = year;
    document.querySelector(".full-date p").innerHTML = new Date().toDateString();
    
    let days = "";
    
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="previous-date">${previousLastDay - x + 1}</div>`
    }
    
    for (let i = 1; i <= lastDay; i++){
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    };
    
    for (let g = 1; g <= nextDays; g++) {
        days += `<div class="next-date">${g}</div>`;
    }
    monthDays.innerHTML = days;    
};

document.querySelector(".previous").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    render();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    render();
});

render();
