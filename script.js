let input = document.getElementById("inputBox");
// Csak a kalkulátor gombjait kezeljük, a piros PUSH gombot nem
let buttons = document.querySelectorAll(".calculator button");

let string = "0";

let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// PUSH gomb: amíg nyomva tartjuk, a kalkulátor 180 fokban elfordul
const calculator = document.querySelector(".calculator");
const pushButton = document.querySelector(".red button");

if (calculator && pushButton) {
  const addFlip = () => calculator.classList.add("flipped");
  const removeFlip = () => calculator.classList.remove("flipped");

  pushButton.addEventListener("mousedown", addFlip);
  pushButton.addEventListener("mouseup", removeFlip);
  pushButton.addEventListener("mouseleave", removeFlip);

  // Érintőkijelző támogatás
  pushButton.addEventListener("touchstart", addFlip);
  pushButton.addEventListener("touchend", removeFlip);
  pushButton.addEventListener("touchcancel", removeFlip);
}
