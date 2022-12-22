import { formatError, formatTime } from "./utils.js";
import { hoursInput, minutesInput, secondsInput } from "./main.js";
import timerBell from "./audio/timer-bell.mp3";

const audio = new Audio(timerBell);

const timerMessage = document.getElementById("timerMessage");

export function createTimer(time) {
  timerMessage.innerHTML = "";

  if (time <= 0) {
    timerMessage.innerHTML = formatError("Время должно быть больше 0");
    return;
  }

  const timerId = setInterval(() => {
    if (time === 1) {
      timerMessage.innerHTML = "Время вышло";
      audio.play();
      clearInterval(timerId);
    }
    const timeObj = formatTime(--time);
    hoursInput.value = timeObj.hours;
    minutesInput.value = timeObj.minutes;
    secondsInput.value = timeObj.seconds;
  }, 1000);

  return timerId;
}
