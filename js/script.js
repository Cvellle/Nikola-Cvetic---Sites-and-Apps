// FORM 

function enablebutton(inputtxt)
{ 
var numbers = /[0-9]/;
var letters = /[A-Za-z]/;
	if(inputtxt.value.match(numbers))
	{
//alert('Your registration number have accepted : you can try another');
form1.text1.focus();
submit.disabled=false;

	return true;
}
	if(inputtxt.value.match(letters))
	{return false;
		alert('Please input alphanumeric characters only');
	}


}



//SUBMIT

submit.addEventListener("click",subm);
const wd = document.querySelector("#worksdiv");

function subm() {
	
	// works.style.display="block";
	// ifr.style.display="block";
	wd.style.backgroundColor = "rgb(191, 154, 211)";
	lock.innerHTML = "Bravo, you unlocked the projects! Click here to see them";
	// const url="https://www.google.rs/search?q=a+href+new+window+js&rlz=1C1CHBF_enRS770RS770&oq=a+href+new+window+js&aqs=chrome..69i57j35i39j0l4.6282j0j7&sourceid=chrome&ie=UTF-8";
	// window.open(url, '_blank').focus();

	// lock.innerHTML = "changed!";
	// var screen = Object.assign([`${val}`,2], localStorage);
	// document.write(screen[0]);
// 	worksdiv.disabled=false;
worksdiv.disabled=false;
}



function show() {
	
	works.style.display="block";
	ifr.style.display="block";

}

function hide() {
	
	works.style.display="none";
	ifr.style.display="none";

}

worksdiv.addEventListener("click",show);
works.addEventListener("mouseleave",hide);
// Scroll to work 

$(".proj1").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: 1*0.98}, 800);		
  });

  $(".proj2").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: $(".works").width()}, 800);		
  });

  $(".proj3").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: $(".works").width()*2}, 800);		
  });

  $(".proj4").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: $(".works").width()*3}, 800);		
  });

  $(".proj5").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: $(".works").width()*4}, 800);		
  });

  $(".proj6").click(function () { 
	var leftPos = $('.works').scrollLeft();
	console.log(leftPos+2);
	// $(".works").animate({scrollLeft: leftPos + 100%}, 800);
	$(".works").animate({ scrollLeft: $(".works").width()*5}, 800);		
  });


// Ellipse way - planets

// window.requestAnimationFrame(anim1);

// var a1 = document.getElementById('a1');

// function anim1(t1) {

//     a1.style.left = (50 + Math.cos(t1 / 11150) * 560) + 'px';
//     a1.style.top = (50 + Math.sin(t1 /11150) * 40) + 'px';
//     window.requestAnimationFrame(anim1);
// }



// 




// ELLIPSE

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
	
	