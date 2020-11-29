var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        var circle;
        var circles = [];

        // TODO 1 : Declare and initialize our variables
        function randomNumberBetween(min, max) {
            var difference = max - min;
            var randomValue = Math.random() * difference;
            return min + randomValue;
        }

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        }
        // TODO 3 / 7 : Call the drawCircle() function 







        var circle1 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        view.addChild(circle1);
        circle1.velocityX = randomNumberBetween(-1, 1);
        circle1.velocityY = randomNumberBetween(-1, 1);
        circles.push(circle1);

        var circle2 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        view.addChild(circle2);
        circle2.velocityX = randomNumberBetween(-1, 1);
        circle2.velocityY = randomNumberBetween(-1, 1);
        circles.push(circle2);

        var circle3 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        view.addChild(circle3);
        circle3.velocityX = randomNumberBetween(-1, 1);
        circle3.velocityY = randomNumberBetween(-1, 1);
        circles.push(circle3);

        var circle4 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        view.addChild(circle4);
        circle4.velocityX = randomNumberBetween(-1, 1);
        circle4.velocityY = randomNumberBetween(-1, 1);
        circles.push(circle4);

        var circle5 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        view.addChild(circle5);
        circle5.velocityX = randomNumberBetween(-1, 1);
        circle5.velocityY = randomNumberBetween(-1, 1);
        circles.push(circle5);


        for (var count = 1; count <= 100; count++) {
            // code block for the for loop
            var circleX = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            view.addChild(circleX);
            circleX.velocityX = randomNumberBetween(-1, 1);
            circleX.velocityY = randomNumberBetween(-1, 1);
            circles.push(circleX);
        }

        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            circle1.x = circle1.x + circle1.velocityX;
            circle1.y = circle1.y + circle1.velocityY;

            circle2.x = circle2.x + circle2.velocityX;
            circle2.y = circle2.y + circle2.velocityY;

            circle3.x = circle3.x + circle3.velocityX;
            circle3.y = circle3.y + circle3.velocityY;

            circle4.x = circle4.x + circle4.velocityX;
            circle4.y = circle4.y + circle4.velocityY;

            circle5.x = circle5.x + circle5.velocityX;
            circle5.y = circle5.y + circle5.velocityY;

            // TODO 4 : Update the circle's position //
            physikz.updatePosition( circle1 );
            physikz.updatePosition( circle2 );
            physikz.updatePosition( circle3 );
            physikz.updatePosition( circle4 );
            physikz.updatePosition( circle5 );

            // TODO 5 : Call game.checkCirclePosition() on your circles.
            game.checkCirclePosition(circle1);
            game.checkCirclePosition(circle2);
            game.checkCirclePosition(circle3);
            game.checkCirclePosition(circle4);
            game.checkCirclePosition(circle5);
      
            // TODO 8 : Iterate over the array
           for (var i = 0; i <= circles.length-1; i++) { 
                circles[i].x = circles[i].x + circles[i].velocityX;
                circles[i].y = circles[i].y + circles[i].velocityY;
                game.checkCirclePosition(circles[i]);
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if (circle.x > canvas.width ) {
                circle.x = 0;
            }
           
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0) {
                circle.x = canvas.width
            }   
            if (circle.y > canvas.height) {
                circle.y = 0;
            }
            if (circle.y < 0) {
                circle.y = canvas.height;
            }

            if (circle.x - circle.radius > canvas.width) {
                circle.x = 0 - circle.radius;
            }
            if (circle.x + circle.radius < 0) {
                circle.x = canvas.width + circle.radius;
            }

            if (circle.y - circle.radius > canvas.height) {
                circle.y = 0 - circle.radius;
            }
            if (circle.y + circle.radius < 0) {
                circle.y = canvas.height + circle.radius;
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
