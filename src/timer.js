import { formatError, formatTime } from "./utils.js";
import { hoursInput, minutesInput, secondsInput } from "./main.js";

const timerMessage = document.getElementById("timerMessage");
const timerBell = document.getElementById("timer-bell");

export function createTimer(time) {
  timerMessage.innerHTML = "";

  if (time <= 0) {
    timerMessage.innerHTML = formatError("Время должно быть больше 0");
    return;
  }

  const timerId = setInterval(() => {
    if (time === 1) {
      timerMessage.innerHTML = "Время вышло";
      timerBell.play();
      clearInterval(timerId);
    }
    const timeObj = formatTime(--time);
    hoursInput.value = timeObj.hours;
    minutesInput.value = timeObj.minutes;
    secondsInput.value = timeObj.seconds;
  }, 1000);

  return timerId;
}
