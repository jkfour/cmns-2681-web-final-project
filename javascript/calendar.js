'use-strict'
//A calendar that displays the current month
//and shows what days events are on



//Create an array of events, with a number for sunday(0) to saturday(6), and a name
const events = [
  { day: 3, name: "Pokemon" },
  { day: 5, name: "Yugioh" },
  { day: 1, name: "Magic" }
];


//Get the elements that need to be updated
let display = document.getElementById("month");
let days = document.querySelector(".days");

//get today's date
let dateToday = new Date();
//define a separate variable for today and get the month and year
let date = dateToday;
let year = date.getFullYear();
let month = date.getMonth();

//format the month and year and update the month
let formattedDate = date.toLocaleString("en-US", {
  month: "long",
  year: "numeric",
});
display.innerText = `${formattedDate}`;


//Display the calendar



//function to display the calendar
function displayCalendar() {
  //To get the exact days in a month, create dates for the first and
  //last day of the month, then get the day to find the index of both days
  //to lay out the days of the month properly
  const firstDay = new Date(year, month, 1);
  const firstDayIndex = firstDay.getDay();
  const lastDay = new Date(year, month + 1, 0);
  const numberOfDays = lastDay.getDate();

  //Using the firstDayIndex, create empty divs to show days before the month starts
  for (let x = 1; x <= firstDayIndex; x++) {
    let div = document.createElement("div");
    div.innerHTML += "";
    days.appendChild(div);
  }

  //Using the numberOfDays, create divs representing each day of the month, 
  // adding a data attribute containing a date and appending it to the days element
  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);
    div.dataset.date = currentDate.toDateString();
    div.innerHTML += i;


    //Loop through events and remove the day number, replacing it with the name of the days event
    for (let i = 0; i < events.length; i++) {
      if (currentDate.getDay() === events[i].day) {
        let p = document.createElement("p");
        p.classList.add("event-name");
        p.innerText = events[i].name;
        div.appendChild(p);
      }
    }

    days.appendChild(div);



    //if the currentDate is equal to the actual current date
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      //add a class to the div at currentDate
      div.classList.add("current-date");
    }
  }
}

displayCalendar();