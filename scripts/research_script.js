const daysTag = document.querySelector(".research-days"),
currentDate = document.querySelector(".research-current-date"),
prevNextIcon = document.querySelectorAll(".research-icons span"),
dayDetails = document.getElementById("day-details"),
dayDescription = document.getElementById("day-description");

// Custom content for each day
const dayContents = {
    "2024-07-01": `
        <p>Worked on a new ML project.</p>
        <img src="path/to/icon1.png" alt="Icon 1">
        <button onclick="someFunction()">Click Me</button>
    `,
    "2024-07-02": `
        <p>Reviewed research papers on AI.</p>
        <img src="path/to/icon2.png" alt="Icon 2">
    `,
    // Add more entries as needed
};

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" data-date="${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;

    // Add click event listeners to the days
    document.querySelectorAll('.research-days li').forEach(day => {
        day.addEventListener('click', () => {
            const selectedDate = `${currYear}-${String(currMonth + 1).padStart(2, '0')}-${String(day.dataset.date).padStart(2, '0')}`;
            const content = dayContents[selectedDate] || `<p>No details available for ${months[currMonth]} ${day.dataset.date}, ${currYear}</p>`;
            dayDescription.innerHTML = content;
            dayDetails.style.display = 'block';
        });
    });
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});
