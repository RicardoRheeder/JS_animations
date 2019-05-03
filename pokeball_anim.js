var canBeClicked = true;

var pokeball = document.querySelector('.pokeballContainer');

var pokeballCenter = document.querySelector('.circle_inner');
var shadow = document.querySelector('.shadow');

pokeballCenter.addEventListener('click', clickHandler);

function clickHandler(){
    if (canBeClicked === true){
        console.log('Clicked!');
        canBeClicked = false;

        performAnimation();
    }
}

function performAnimation(){
    // Wait duration of animations before allowing interaction
    setTimeout( function(){
        canBeClicked = true;
    } ,4000); 

    var isRed = false;
    var colorTransition = setInterval(function(){
        if (isRed){
            pokeballCenter.style.background = "white";
            isRed = false;
        } else {
            pokeballCenter.style.background = "red";
            isRed = true;
        }
    }, 600);


    // Start with rotation to the right!
    rotateRight();

    function rotateRight(){
        console.log("Right");
        setTimeout(rotateLeft, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(50px) rotate(45deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(15px)";
    }
    
    function rotateLeft(){
        console.log("Left");
        setTimeout(rotateMinorRight, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(-50px) rotate(-45deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(-15px)";
    }

    function rotateMinorRight(){
        console.log("Right");
        setTimeout(rotateMinorLeft, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(30px) rotate(30deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(10px)";
    }

    function rotateMinorLeft(){
        console.log("Left");
        setTimeout(rotateMinorMinorRight, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(-30px) rotate(-30deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(-10px)";
    }

    function rotateMinorMinorRight(){
        console.log("Right");
        setTimeout(rotateMinorMinorLeft, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(15px) rotate(15deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(5px)";
    }

    function rotateMinorMinorLeft(){
        console.log("Left");
        setTimeout(rotateCenter, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(-10px) rotate(-10deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(-5px)";
    }

    function rotateCenter(){
        console.log("Center");
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(0px) rotate(0deg)";
        shadow.style.transition = "transform 0.6s";
        shadow.style.transform = "translate(0px)";
        clearInterval(colorTransition);
        pokeballCenter.style.background = "white";
        isRed = false;
    }
}