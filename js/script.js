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



function show() {
	
	const url="https://cvellle.github.io/Works/";
	window.open(url, '_blank').focus();

}


worksdiv.addEventListener("click",show);

