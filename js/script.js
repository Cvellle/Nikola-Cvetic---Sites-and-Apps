const highlight = document.querySelector(".highlight");
const formToUnlock = document.querySelector(".form1");
const instruction = document.querySelector("#instr");
const cvLink = document.querySelector("#circlingLink");
const introduction = document.querySelector(".introduction > p");

// FORM
text1.onkeydown = function (e) {
  if (e.keyCode > 57 || (e.keyCode < 48 && e.keyCode != 8)) {
    alert("Please input only numbers");
    return false;
  }
  if (e.keyCode <= 57 && text1.value.length > 0 && e.keyCode != 8) {
    submit.disabled = false;
    form1.text1.focus();
    return true;
  }
};

//UNLOCK
submit.addEventListener("click", unlockCv);

function unlockCv() {
  highlight.style.cursor = "pointer";
  highlight.setAttribute("style", "pointer-events:fill");
  highlight.style.webkitFilter = "brightness(1.2)";
  formToUnlock.style.background = "blue";
  instruction.innerHTML =
    instruction.innerHTML !== " " ? "Sucess! Now click on the Sattelite" : " ";
}

//CLICK ON THE CV
cvLink.addEventListener("click", changeTextAfterCvClick);

function changeTextAfterCvClick() {
  instruction.innerHTML = " ";
  const unlockSpan =
    introduction.firstChild.nextElementSibling.nextElementSibling
      .nextElementSibling;
  unlockSpan.style.display = "none";
  unlockSpan.nextElementSibling.style.display = "inline";
}
