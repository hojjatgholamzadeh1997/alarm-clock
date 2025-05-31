const time = document.getElementById("time");

const clock = document.getElementById("clock");
const body = document.documentElement;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");

const alarmButton = document.getElementById("alarm-button");

const audio = document.getElementById("audio");

let option;
let chosenHour;
let chosenMinute;

// Display Current Time
window.addEventListener("load", () => {
  setInterval(() => {
    let now = new Date();
    
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (hour <= 9) hour = "0" + hour;
    if (minute <= 9) minute = "0" + minute;
    if (second <= 9) second = "0" + second;

    time.innerHTML = `${hour} : ${minute} : ${second}`;

    if (chosenHour == hour && chosenMinute == minute) {
      audio.play();
      clock.className = "ring";
      body.className = "shining";
    }
  }, 100);
});

// Create Hour Options
for (let i = 0; i <= 23; i++) {
  option = document.createElement("option");
  if (i <= 9) {
    option.textContent = `0${i}`
    option.value = `0${i}`;
  } else {
    option.textContent = `${i}`
    option.value = `${i}`;
  }
  hours.appendChild(option);
}

// Create Minute Options
for (let i = 0; i <= 60; i++) {
  option = document.createElement("option");
  if (i <= 9) {
    option.textContent = `0${i}`
    option.value = `0${i}`;
  } else {
    option.textContent = `${i}`
    option.value = `${i}`;
  }
  minutes.appendChild(option);
}

// Alarm Button
alarmButton.addEventListener("click", () => {
  if (hours.selectedOptions[0].value === "Hour" && minutes.selectedOptions[0].value === "Minute") {
    alert("Please Select Hour & Minute");
  } else if (hours.selectedOptions[0].value === "Hour") {
    alert("Please Select Hour");
  } else if (minutes.selectedOptions[0].value === "Minute") {
    alert("Please Select Minute");
  } else {

    if (alarmButton.innerHTML === "Set Alarm") {
      hours.disabled = true;
      minutes.disabled = true;
      alarmButton.innerHTML = "Clear Alarm"
      chosenHour = hours.selectedOptions[0].value;
      chosenMinute = minutes.selectedOptions[0].value;
      alarmButton.style.opacity = "75%";
    } else {
      hours.disabled = false;
      minutes.disabled = false;
      alarmButton.innerHTML = "Set Alarm"
      chosenHour = "";
      chosenMinute = "";
      audio.pause();
      clock.className = "";
      body.className = "";
      alarmButton.style.opacity = "100%";
    }
  }
});
