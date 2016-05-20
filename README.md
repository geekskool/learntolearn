# LearnToLearn

##Why?

The Learn JavaScript helps teaching programming and we chose JavaScript as language. But there is an allure to projects like Processing, which teach programming in a little more visual – and a little less black matrix. Learn Javasciprt takes the edge off of graphical programming by providing a ready-made environment. The provided framework lets the student easily create graphical solutions. The framework offers a set of drawing functions and a setup/draw structure. We used Canvas API to build this framework, but the canvas will stay in the back-end. 

##Prerequisites

This will run on all linux/ Mac/ Windows based operating systems. The framework works well offline as well. You can run it on Mozilla/ Chrome/ Safari browsers. 

##Get Started

The most important file is named project.js. This is where the student puts his/her solution. If all of it runs perfect then you can start drawing. 
Something like this-

```

function draw() {
  // this will be repeated on and on and on...
  rectangle(10, 10, 100, 100);
}
```

##Sketchbook

The framework, which is used by including sketchbook.js, provides a main function. By default, it brings up a 800 x 600 px wide window.
It calls the setup method once before the drawing starts. It can be used to do initialization.

To see something on the screen, we need to write a draw method. This method is called 25 times a second (if the computer is fast enough). All drawing code is executed and the final picture is put on the screen right after the method has finished. It is highly discouraged to use delay or similar functions in the draw method. This interferes with keyboard, mouse and other handlers.

##Drawing

```
// Get the window's dimensions
WIDTH
HEIGHT

// Set fill color for drawing future shapes. Each RGB component shall be between 0..255.
function fill(context, color);

// Draws a line from x to y with the stroke color.
function line(x, y, color);

// Draws a rectangle.
function rectangle(x, y, height, width, color);

// Draws an ellipse around (x, y) with the radius of rx and ry.
function ellipse(x, y, radius, startPoint, endPoint, color);

// Draws a circle with its midpoint at (x, y) and radius r.
function circle(x, y, radius, startPoint, endPoint, color);

// Draws a pie piece around the midpoint (x,y) and radius r. Start and end angle are given in degrees
function pie(x, y, radius, startPoint, endPoint, color);

// Sets the given pixel to the stroke color.
function pixel(x, y, color);

// Draws the given text at (x,y), using the stroke color.
function text(x, y, const char* text, color);

// Set the background color through RGB values from 0..255. It is used to clear the screen before each draw() call.

// Fills the color in the figures as per the user wants.
function fill(str);

// On mouse click gives the coordinates of a particular point when you click the screen somewhere. 
function onClick(event);

// Shows the frame per second
function showfps();

```

##Examples 
## 1. Android bot
```
// function to draw the android bot logo on the canvas
function draw(){
	
	ellipse(500, 350, 150, 150, 180, 0, 1)	//Draw Head
	fill("#A4C639")
	
	ellipse(430, 275, 12, 12, 180, 0, 2)	//Draw Left Eye
	fill("white")

	ellipse(565, 275, 12, 12, 180, 0, 2)	//Draw Right Eye
	fill("white")

	rectangle(350,365,300,300)				//Draw Body
	fill("#A4C639") 

	rectangle(273,400,64,120)				//Draw Left Arm
	fill("#A4C639") 

	ellipse(305,405,32,32,180,0,2)
	fill("#A4C639")

	ellipse(305,520,32,32,180,0,2)
	fill("#A4C639")

	rectangle(663,400,64,120)				//Draw Right Arm
	fill("#A4C639") 

	ellipse(695,405,32,32,180,0,2)
	fill("#A4C639")

	ellipse(695,520,32,32,180,0,2)
	fill("#A4C639")

	rectangle(420,630,64,120)				//Draw Left Leg
	fill("#A4C639")

	ellipse(452,750,32,32,180,0,2)
	fill("#A4C639")

	rectangle(520,630,64,120)				//Draw Left Leg
	fill("#A4C639")

	ellipse(552,750,32,32,180,0,2)
	fill("#A4C639")

	ellipse(399,161,10,10,180,0,2)
	fill("#A4C639")

	ellipse(596,161,10,10,180,0,2)
	fill("#A4C639")

	ctx.strokeStyle = "#A4C639"

	for (var i = -11; i <= 11; i++) {		//Draw Left Antenna
		line(399+i,161,445+i,219)
	}

	for (var i = -11; i <= 11; i++) {		//Draw Right Antenna
		line(596+i,161,550+i,220)
	}


}

```
![](http://i.imgur.com/bVYx278.jpg?1)

##2. Geekskool logo

```
// function to draw the geekskool logo on the canvas
function draw(){
	
	ctx.strokeStyle= "orange";
	for (var i = 0; i <= 100; i++){
		line(350+i,100,100+i,350)
	}

	for (var i = 0; i <= 100; i++) {
		line(100+i,350,350+i,600)
	}

	for (var i = 0; i <= 100; i++) {
		line(650+i,600,900+i,350)
	}

	for (var i = 0; i <= 100; i++){
		line(900+i,350,650+i,100)
	}

	text("G",340,520,530);
	fill("orange")
	
	

}

```
![](http://i.imgur.com/evHvmiR.jpg?1)

## 3. Ubuntu logo
```
// function to draw the ubuntu logo on the canvas
function draw(){
    circle(548, 317, 200, 0, 2)
    fill("red");

    circle(548, 317, 150, 0, 2)
    fill("white");

    circle(548, 317, 70, 0, 2)
    fill("red");

    for( var i=0; i<20;i++){
        line(548+i,317, 448+i,170)
    }

    for( var i=0; i<20;i++){
        line(548+i,317, 471+i,473)
    }

    for( var i=0; i<20;i++){
        line(548,317+i, 721, 284+i)
    }

    circle(396, 316, 40, 0, 2)
    fill("red");

    circle(396, 316, 30, 0, 2)
    fill("white");

    circle(603, 172, 40, 0, 2)
    fill("red");

    circle(603, 172, 30, 0, 2)
    fill("white");

    circle(661, 428, 40, 0, 2)
    fill("red");

    circle(661, 428, 30, 0, 2)
    fill("white");

    ctx.strokeStyle = 'red';


}


```

![](http://i.imgur.com/CIYCqiD.png?1)

##4. Batman logo
```
// function to draw the batman logo on the canvas
function draw(){
	ctx.strokeStyle = "yellow"
	ellipse(500,500,310,160,0,0,2)
	fill("black")	

	ellipse(500,500,299,149,0,0,2)
	fill("yellow")

	ellipse(500,500,284,134,0,0,2)
	fill("black")

	circle(405,420,50,0,2)
	fill("yellow")

	circle(595,420,50,0,2)
	fill("yellow")	

	rectangle(545,365,70,50)
	fill("yellow")

	rectangle(385,365,70,50)
	fill("yellow")

	ellipse(500,353,50,50,0,0,1)
	fill("yellow")

	ellipse(370,600,40,70,145,0,1.3)
	fill("yellow")

	ellipse(630,600,40,70,35,0.7,2)
	fill("yellow")

	ellipse(448,630,52,90,175,0,1.05)
	fill("yellow")

	ellipse(552,630,52,90,5,0.95,2)
	fill("yellow")

}

```

![](http://i.imgur.com/BaHjW6d.jpg?1)









