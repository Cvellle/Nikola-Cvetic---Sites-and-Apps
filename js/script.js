var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('style', 'border: 0px solid black');
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '100');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.className  = "squarediv1 target blocked";  

var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c1.setAttribute('cx', '50');
c1.setAttribute('cy', '50');
c1.setAttribute('r', '50');  
c1.setAttribute('style', 'fill: yellow');
c1.setAttribute('class', 'blocked');