const header = document.getElementById("header-container");
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
const notEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
const emergencyTitles = document.querySelectorAll(".emergency-tasks h3");
const notEmergencyTitles = document.querySelectorAll(".no-emergency-tasks h3");
const footer = document.querySelector("#footer-container");

header.style.backgroundColor = 'green';

for (const element of emergencyTasks) {
  element.style.backgroundColor = 'pink';
}

for (const element of notEmergencyTasks) {
  element.style.backgroundColor = 'yellow';
}

for (const element of emergencyTitles) {
  element.style.backgroundColor = 'blueviolet';
}

for (const element of notEmergencyTitles) {
  element.style.backgroundColor = 'black';
}

footer.style.backgroundColor = 'darkcyan';
