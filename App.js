//^So in this digital clock, by using date object we use gethours,getminutes,getseconds method  we create this clock. And also in this we use setinterval so it will execute again and again.

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dateEl = document.getElementById("date");
let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let period = document.getElementById("period");

setInterval(() => {
  let currentTime = new Date();
  // console.log(currentTime);

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let date = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();

  let ampm = hours >= 12 ? "" : "";
  hours = hours % 12;
  hours = hours ? hours : 12;

  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + hours;
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + minutes;
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + seconds;

  dateEl.innerHTML = date;
  monthEl.innerHTML = month + 1;
  yearEl.innerHTML = year;

  period.innerHTML = ampm;
}, 1000);
