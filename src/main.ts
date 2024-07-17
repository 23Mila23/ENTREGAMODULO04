const buttonBack = document.getElementById("button-back");
const buttonForward = document.getElementById("button-forward");
const buttonReset = document.getElementById("button-reset");
const currentTurn = document.getElementById("current-turn") as HTMLElement;
const newTurn = document.getElementById("custom-turn") as HTMLInputElement;
const buttonChangeTurn = document.getElementById("button-custom-turn");


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

function changeTurn() {
 const value = parseInt(newTurn.value);

 if (value > 0) {
 const finalValue = value.toString();
 currentTurn.innerHTML = finalValue.padStart(2,"0")

 } else {
  currentTurn.innerHTML = "00";
 }
 
}

buttonBack?.addEventListener("click", goBack);
buttonForward?.addEventListener("click", goForward);
buttonReset?.addEventListener("click", resetTurn);
buttonChangeTurn?.addEventListener("click", changeTurn);

