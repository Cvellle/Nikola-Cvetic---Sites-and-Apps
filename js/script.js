// FORM 

text1.onkeydown = function(e) {
    
    if (e.keyCode > 57 || e.keyCode<48 && e.keyCode!=8) {

		alert('Please input only numbers');	
		return false;

	}

	if (e.keyCode<=57 && text1.value.length>0 && e.keyCode!=8) {

		submit.disabled=false;
		form1.text1.focus();
		return true;

	}

}



//UNLOCK

submit.addEventListener("click",subm);
const wd = document.querySelector("#worksdiv");

function subm() {
	document.querySelector(".highlight").style.cursor="pointer";
	document.querySelector(".highlight").setAttribute("style", "pointer-events:fill");
	document.querySelector(".highlight").style.webkitFilter="brightness(1.2)";
	document.querySelector(".form1").style.background="blue";
	instr.innerHTML = "Sucess! Now click on the Sattelite";

}



// SHOW PROJECTS

document.querySelectorAll(".work").forEach(w => w.addEventListener("mouseover", showProject));
document.querySelectorAll(".work").forEach(w => w.addEventListener("mouseleave", hideProject));

function showProject(e) {
	e.preventDefault();
	const preview = document.querySelector(".preview");
	let routea = "./images/projects/avologic.jpg";
	preview.style.background = `url(${this.dataset.route})`;
	
}

function hideProject() {
	const preview = document.querySelector(".preview");
	preview.style.background = `transparent`;
}

