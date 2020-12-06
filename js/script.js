const cvLink = document.querySelector("#circlingLink");
const formToUnlock = document.querySelector(".form1");
const highlight = document.querySelector(".highlight");
const instruction = document.querySelector("#instr");
const introduction = document.querySelector(".introduction > p");
const submitInput = document.querySelector("#submitInput");
const submitButton = document.querySelector("#submit");

// FORM
submitInput.onkeydown = function (e) {
  if (e.keyCode > 57 || (e.keyCode < 48 && e.keyCode != 8)) {
    alert("Please input only numbers");
    return false;
  }
  if (e.keyCode <= 57 && submitInput.value.length > 0 && e.keyCode != 8) {
    submitButton.disabled = false;
    form1.submitInput.focus();
    return true;
  }
};

//UNLOCK
submitButton.addEventListener("click", unlockCv);

function unlockCv() {
  highlight.style.cursor = "pointer";
  highlight.setAttribute("style", "pointer-events:fill");
  highlight.style.webkitFilter = "brightness(1.2)";
  formToUnlock.style.background = "blue";
  instruction.innerHTML =
    instruction.innerHTML !== " " ? "Sucess! Now click on the Sattelite" : " ";

  const unlockSpan =
    introduction.firstChild.nextElementSibling.nextElementSibling
      .nextElementSibling;
  unlockSpan.style.display = "none";
  unlockSpan.nextElementSibling.style.display = "inline";
  unlockSpan.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
    "none";
  unlockSpan.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
    "inline";
}

//CLICK ON THE CV
cvLink.addEventListener("click", changeTextAfterCvClick);

function changeTextAfterCvClick() {
  instruction.innerHTML = " ";
}
