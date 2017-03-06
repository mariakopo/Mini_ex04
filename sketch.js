var fillVal = (244, 194, 194);


function setup() {
 createCanvas(800, 600);  
 background(0);
 strokeWeight(4);
 stroke(254, 254, 250, 90);
}

function draw() {

footer(60,40); 
 
}

function keyPressed() {   
	
   if (keyCode == 32) { 
		strokeWeight(4);
        Stroke(254, 254, 250, 90);
		fill(0);
		var size = map(mouseX, height, width, 2, 15);
		triangle(mouseX, mouseY, width/2, height/2, width/2, height/2);

   }else{ 
   		fillVal = (random(255));
   }

   fill(fillVal);
   rect(0,0,width, height);
}

function footer(distance, footersize) {
  for (var i = 0; i < width; i+=distance) {
  		fill(random(255));
  		ellipse(i, height/2, mouseX, mouseY);

  }
}
