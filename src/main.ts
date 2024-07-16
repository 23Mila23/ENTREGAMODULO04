const buttonBack = document.getElementById("button-back");
const buttonForward = document.getElementById("button-forward");
const buttonReset = document.getElementById("button-reset");
const currentTurn = document.getElementById("current-turn") as HTMLElement;

function goBack() {
  const value = parseInt(currentTurn.innerHTML as string);
  const finalNumber = value - 1;
  const finalNumberConverted = finalNumber.toString();

  if (finalNumber >= 0) {
    currentTurn.innerHTML = finalNumberConverted.padStart(2,"0");
  } 
}
function goForward() {
  const value = parseInt(currentTurn.innerHTML as string);
  const finalNumber = value + 1;
  const finalNumberConverted = finalNumber.toString();
  currentTurn.innerHTML = finalNumberConverted.padStart(2,"0");
}

function resetTurn() {
  currentTurn.innerHTML = "00";
}

buttonBack?.addEventListener("click", goBack);
buttonForward?.addEventListener("click", goForward);
buttonReset?.addEventListener("click", resetTurn);
