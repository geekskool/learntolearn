# LearnToLearn

##Why?

The Learn JavaScript helps teaching programming and we chose JavaScript as language. But there is an allure to projects like Processing, which teach programming in a little more visual – and a little less black matrix. Learn Javasciprt takes the edge off of graphical programming by providing a ready-made environment. The provided framework lets the student easily create graphical solutions. The framework offers a set of drawing functions and a setup/draw structure. We used Canvas API to build this framework, but the canvas will stay in the back-end. 

##Prerequisites

This will run on all linux/ Mac/ Windows based operating systems. The framework works well offline as well. You can run it on Mozilla/ Chrome/ Safari browsers. 

##Get Started

The most important file is named project.js. This is where the student puts his/her solution. If all of it runs perfect then you can start changing our setup and draw methods. 
Something like this-

```
function setup() {
  // do initialization here
}

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

// The framework also includes the functions to play with the drawing. For instance- rotate, transform, transfer and scale.

```









