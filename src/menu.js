import { dateCalcForm, timerBlock } from "./main.js";

export function menuHandler({ target }) {
  if (!target.classList.contains("navBtn")) {
    return;
  }
  if (target.classList.contains("dateCalcBtn")) {
    dateCalcForm.style = "display: block";
    timerBlock.style = "display: none";
  }
  if (target.classList.contains("timerBtn")) {
    dateCalcForm.style = "display: none";
    timerBlock.style = "display: block";
  }
}
