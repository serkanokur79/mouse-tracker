const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');

var scoreRedCircle = 0;
var scoreBlueCircle = 0;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).

    setInterval(function(){
            rR = 0.8;
            bB = 0.9;
            rMult = (Math.random()/10)
            bMult = (Math.random()/10)
           rMult2 = (Math.random()/10)
           bMult2 = (Math.random()/10)
        }, 1000);
        // let rMult2 = (Math.random()/10);

    var horizontalPosition = (rR-rMult)*windowWidth - e.clientX;
    var verticalPosition= (rR-rMult2)*windowHeight - e.clientY;

    var horizontalPosition2 = bB*windowWidth - e.clientX;
    var verticalPosition2 = bB*windowHeight - e.clientY;

        // Set horizontal and vertical position of red circle
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

        // Set horizontal and vertical position of the blue circle
    CIRCLE2.style.left = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition2 + 'px';
}

function changeColorOnTouch() {
    // change the style of red circle
    CIRCLE.style.backgroundColor = "red";
    CIRCLE.style.borderColor = "red";

}

function changeColor2OnTouch() {
      // change the style of blue circle
    CIRCLE2.style.backgroundColor = "blue";
    CIRCLE2.style.borderColor = "blue";
}

function updateScoreRedCircle(){
    //update the score of red circle
        ++ scoreRedCircle;
        let a = 0;
        let b = 0;
        if (scoreRedCircle>99){
          a = "";
          b = "";
        } else if (scoreRedCircle>9){
          a = "0";
          b = "";
        } else{
          a = "0";
          b = "0";
        }

    document.querySelector('.sRed').innerHTML= a + b + scoreRedCircle;
    // document.getElementById('sRed').InnerHTML="";
}

function updateScoreBlueCircle(){
    //update the score of red circle
        ++ scoreBlueCircle;
        let a = 0;
        let b = 0;
        if (scoreBlueCircle>99){
          a = "";
          b = "";
        } else if (scoreBlueCircle>9){
          a = "0";
          b = "";
        } else{
          a = "0";
          b = "0";
        }

    document.querySelector('.sBlue').innerHTML= a + b + scoreBlueCircle;
    // document.getElementById('sRed').InnerHTML="";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the red circle, run the changeColorOnTouch & updateScoreRedCircle functions.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE.addEventListener('mouseenter', updateScoreRedCircle, false);

// When the mouse touches the blue circle, run the changeColor2OnTouch & updateScoreRedCircle functions.
CIRCLE2.addEventListener('mouseenter', changeColor2OnTouch, false);
CIRCLE2.addEventListener('mouseenter', updateScoreBlueCircle, false);

// When the mouse leaves the red circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
// When the mouse leaves the blue circle, remove inline styles with an anonymous function.
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
