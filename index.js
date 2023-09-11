const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let d = new Date();

const today = days[d.getDay()];
document.getElementById("today").innerHTML = today;

document.getElementById("UTC").innerHTML = d.getTime();
