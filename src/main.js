import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { menuHandler } from "./menu.js";
import { createTimer } from "./timer.js";

const menu = document.getElementById("menu");
export const dateCalcForm = document.getElementById("datecalc");
export const timerBlock = document.getElementById("timer");
const dateCalcResult = document.getElementById("datecalcResult");
export const hoursInput = document.getElementById("hours");
export const minutesInput = document.getElementById("minutes");
export const secondsInput = document.getElementById("seconds");

menu.addEventListener("click", menuHandler);
dateCalcForm.addEventListener("submit", handleCalcDates);
timerBlock.addEventListener("click", handleTimer);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;

  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (!firstDate || !secondDate) {
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
    return;
  }

  const diff = diffDates(firstDate, secondDate);

  dateCalcResult.innerHTML = diffToHtml(diff);
}

let timerId;

function handleTimer(event) {
  if (event.target.id !== "start" && event.target.id !== "stop") {
    return;
  }

  if (event.target.id === "stop") {
    clearInterval(timerId);
    return;
  }

  const hours = +hoursInput.value;
  const minutes = +minutesInput.value;
  const seconds = +secondsInput.value;

  let time = hours * 3600 + minutes * 60 + seconds;

  timerId = createTimer(time);
}
