# Mid-term-project_ Week05

I've chosen a film titled "Kikujiro," which is a Japanese movie directed by Takeshi Kitano. The story follows a middle school teacher named Kikujiro and his stepson, Masao. After the death of his wife, the two embark on a journey to find Masao's biological mother. Throughout this journey, they develop a deep bond and influence each other, growing together.

![D0U9bX.jpg](https://imgpile.com/images/D0U9bX.jpg)

For the film cover, I envision a train steadily progressing forward, with glimpses of summer landscapes through its windows. The train symbolizes their journey in search of the mother, while the scenes outside the windows capture the quintessential essence of summer.

![D0UDQE.jpg](https://imgpile.com/images/D0UDQE.jpg)

### Themes and Symbols:
The moving lotus leaves symbolize the passage of time and could also represent the speed of the train's journey. Initially appearing on the right side of the screen, they should gradually move to the left, mimicking the motion of a traveling train.
The arched lines in the background can be interpreted as the summer sun seen from the train's window.
The background can incorporate the sound of a train along with the film's most iconic music, "Summer."

### Interactive Elements:
When users click on the screen, the speed of the reed's movement could either increase or decrease, simulating the acceleration or deceleration of the train. (This may be a bit challenging but give it a try and experiment.)

### Temporal Elements:
The landscape outside the window would change in brightness based on real-world time, being luminous during the day and gradually darkening as night approaches.

### Technical Aspects:
Use arrays to store and manage all the lotus leaf objects.
Define the lotus leaves using functions, with each leaf having its own attributes such as position and speed.
Within the draw() function, iterate through all the lotus leaves, update their positions, and render them on the screen.

### Pseudocode：

function Reed {
    // Properties for position, velocity, etc.
    // Methods to display and update position
}

let reeds = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Initially generate a certain number of reeds
    for (let i = 0; i < 100; i++) {
        reeds.push(new Reed());
    }
}

function draw() {
    background(220);  // Background color
    // Update and display all reeds
    for (let reed of reeds) {
        reed.update();
        reed.display();
    }
}

function mousePressed() {
    // When the mouse is clicked, increase or decrease the movement speed of the reeds
}


# Mid-term-project_ Week06
The code will consist of four parts
1. A lotus leaf moving forward
2. When the mouse is pressed down, the lotus leaves gradually stop, and when the mouse is released, the leaves gradually return to their original speed.
3. the sky color is a gradient, vertical gradient, at 12 o'clock is the top rgb (189,231,242) - bottom rgb (255), at 24 o'clock is the top rgb (12,26,53) - bottom rgb (31,74,109)
4. A sun that emits light
5. A car window and its contents

Here's the pseudo-code in more detail
Declare image img and basic animation variables;

// Sky color settings
Declare startColorTop, endColorTop, startColorBottom, endColorBottom;

Function preload():
    Load image from '2222.png' into img;

Function initialize():
    Create canvas;
    Set basic stroke and fill properties;
    Initialize the starting and ending colors for the sky;

Function draw():
    // Sky background
    Get the current hour;
    Determine the sky color gradient based on the hour;
    Call the gradient background drawing function;

    // Sun
    Move to the center of the screen;
    Draw random arcs as sun rays;

    // Leaf animation
    Move back to the origin;
    Display leaf images based on position and speed;
    Update the position of the leaves;
    Adjust speed based on mouse state;

    // Window
    Draw an outer large rectangle and an inner smaller rectangle;

    // (Commented out) Text display
    // Display "菊次郎の夏" at a specific position;

Function drawGradientBackground(c1, c2):
    Draw a vertical gradient on the canvas using colors c1 and c2;

To test the feasibility first, I'll start with a relatively simple graphic to achieve the effect I want in p5js

![DFS8Rk.png](https://imgpile.com/images/DFS8Rk.png)
Testing sky color over time

![DFSVfM.png](https://imgpile.com/images/DFSVfM.png)
Test the effect of moving the lotus leaf forward

![DFSXF4.png](https://imgpile.com/images/DFSXF4.png)
Then I drew the shape of a simple lotus leaf in illustrator to test if it would work

![DFSou2.png](https://imgpile.com/images/DFSou2.png)
Then changed the shape of the lotus leaves and added the sky color

I wonder if there are some more changes to be made to the visuals?


# Mid-term-project_ Week07

Instead of using a png image drawn in illustrator, I finally decided to draw the lotus leaves directly in p5js. I created a class called Tree for the lotus leaves, and I wanted the leaves to follow the direction of my mouse swing, I did a lot of testing, but it was all dynamic and there is no way to show it, you can see it in my presentation.

Eventually I tried to add sounds to my project, but it never worked. I don't know why.

![G4t5tG.png](https://imgpile.com/images/G4t5tG.png)

![G4tRHa.png](https://imgpile.com/images/G4tRHa.png)