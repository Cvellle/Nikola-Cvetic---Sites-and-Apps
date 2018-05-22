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


//SUBMIT

submit.addEventListener("click",subm);
const wd = document.querySelector("#worksdiv");

function subm() {
	document.querySelector(".space").style.zIndex="-33";
	// document.querySelector(".highlight").style.pointerEvents="pointer";
	document.querySelector(".highlight").style.webkitFilter="brightness(1.2)";
	document.querySelector(".form1").style.background="blue";
	instr.innerHTML = "Sucess! Now click on the Sattelite";

	// wd.style.backgroundColor = "rgb(191, 154, 211, 0.45)";
	// lock.innerHTML = "You unlocked the projects! Click here and follow planets";
	// worksdiv.disabled=false;
	// unlocked.style.display="block";
	// locked.style.display="none";
	// return false;
	
}



function show() {
	
	const url="https://cvellle.github.io/Works/";
	window.open(url, '_blank').focus();

}


worksdiv.addEventListener("click",show);






//SCROLL LEFT FUNCTION


$(".proj1").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: 1*0.98}, 800);		
  });

  $(".proj2").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: $(".works").width()}, 800);		
  });

  $(".proj3").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: $(".works").width()*1.98}, 800);		
  });

  $(".proj4").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: $(".works").width()*3}, 800);		
  });

  $(".proj5").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: $(".works").width()*4}, 800);		
  });

  $(".proj6").click(function () { 
	var leftPos = $('.works').scrollLeft();
	$(".works").animate({ scrollLeft: $(".works").width()*5}, 800);		
  });




// ELLIPSE - LINK THAT FOLLOWS A HIDDEN CIRCULATING ELEMENT

  function highlightLink() {
    const linkCoords = b.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
	  left: linkCoords.left + window.scrollX
	};
	
	const linkCoords2 = scale.getBoundingClientRect();
	const coords2 = {
		width: linkCoords2.width,
		height: linkCoords2.height
	};

	highlight.style.transform = `translate(${coords.left}px, ${coords.top}px) scale(${coords2.width/20})`;
  }
  var int=0.0001;
  setInterval(function() { highlightLink(); }, int);

  






























// var screen = Object.assign([`${val}`,2], localStorage);


// $('#').blur(function(){
//     if($(this).val().length != 1){
//         $('#dis_rm').prop('disabled', false);
//     }
// });





// const highlight = document.getElementById(acv);
//   highlight.setAttribute('class', 'cv');
//   highlight.setAttribute('href',"https://cvellle.github.io/Nikola-Cvetic-CV/");
//   highlight.setAttribute('target',"#")
//   document.body.appendChild(highlight);



// Show works menu
// const works = document.querySelector('.worksdiv');
// works.addEventListener("click", showWorks);

// function showWorks() {
	
// 	this.nextElementSibling.style.transition="0.3s";


//  if (this.nextElementSibling.style.display === "block") {
//         this.nextElementSibling.style.display = "none";
//     } else
// 		{
//         this.nextElementSibling.style.display = "block";
//     }
	
// }	  



//window.onload = function(){
	// 	var canvas = document.getElementById("canvas");
	// 	var ctx = canvas.getContext("2d");
		
	
	// 	var W = window.innerWidth, H = window.innerHeight;
	// 	canvas.width = W;
	// 	canvas.height = H;
		
	// 	var particles = [];
	// 	var mouse = {};
		
	
	// 	var particle_count = 100;
	// 	for(var i = 0; i < particle_count; i++)
	// 	{
	// 		particles.push(new particle());
	// 	}
		
	
	// 	canvas.addEventListener('mousemove', track_mouse, false);
		
	// 	function track_mouse(e)
	// 	{
	
	// 		mouse.x = e.pageX;
	// 		mouse.y = e.pageY;
	// 	}
		
	// 	function particle()
	// 	{
	
	// 		this.speed = {x: -2.5+Math.random()*5, y: Math.random()};
	
	// 		if(mouse.x && mouse.y)
	// 		{
	// 			this.location = {x: mouse.x, y: mouse.y};
	// 		}
	// 		else
	// 		{
	//             this.location = {x: W+200, y: H+200};
	//             this.globalAlpha=0;
	// 		}
	
	// 		this.radius = 10+Math.random()*10;
	
	// 		this.life = 20+Math.random()*5;
	// 		this.remaining_life = this.life;
	
	// 		this.r = Math.round(Math.random()*255);
	// 		this.g = Math.round(Math.random()*255);
	// 		this.b = Math.round(Math.random()*255);
	// 	}
		
	// 	function draw()
	// 	{
	
	// 		ctx.globalCompositeOperation = "source-over";
	// 		ctx.fillStyle = "black";
	// 		ctx.fillRect(0, 0, W, H);
	// 		ctx.globalCompositeOperation = "lighter";
			
	// 		for(var i = 0; i < particles.length; i++)
	// 		{
	// 			var p = particles[i];
	// 			ctx.beginPath();
	
	
	// 			p.opacity = Math.round(p.remaining_life/p.life*100)/100;
	
	// 			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
	// 			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
	// 			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
	// 			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
	// 			ctx.fillStyle = gradient;
	// 			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
	// 			ctx.fill();
				
	
	// 			p.remaining_life--;
	// 			p.radius--;
	// 			p.location.x += p.speed.x;
	// 			p.location.y += p.speed.y;
				
	
	// 			if(p.remaining_life < 0 || p.radius < 0)
	// 			{
	
	// 				particles[i] = new particle();
	// 			}
	// 		}
	// 	}
		
	// 	setInterval(draw, 33);
	// }
	
	











	



// $('#text1').keydown(function(e){

// 	if(e.which<=57 && e.which!=32) {
//     	if($(this).val().length > 0) {
// 			$('#submit').prop('disabled', false);
// 	}}

// 	if(e.which>57) {
// 		return false;
// 	}
	
// });




	// function enablebutton(inputtxt,e) {
 
// 	if (e.which<=57 && inputtxt.value.match(letters)) { 		

// 			alert('Please input only numbers');	
// 			return;

// 		}


// 	if (inputtxt.value.match(numbers)) {

// 			submit.disabled=false;
// 			form1.text1.focus();
// 			return true;

// 		}
// }
