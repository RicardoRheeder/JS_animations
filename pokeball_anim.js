var canBeClicked = true;

var pokeball = document.querySelector('.pokeballContainer');

var pokeballCenter = document.querySelector('.circle_inner');

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
    } ,5000); 

    rotateRight();

    function rotateRight(){
        console.log("Right");
        setTimeout(rotateLeft, 400);
        pokeball.style.transition = "transform 0.4s";
        pokeball.style.transform = "translate(50px) rotate(45deg)";
    }

    function rotateMinorRight(){
        console.log("Right");
        setTimeout(rotateMinorLeft, 600);
        pokeball.style.transition = "transform 0.6s";
        pokeball.style.transform = "translate(30px) rotate(25deg)";
    }

    function rotateLeft(){
        console.log("Left");
        setTimeout(rotateMinorRight, 800);
        pokeball.style.transition = "transform 0.8s";
        pokeball.style.transform = "translate(-50px) rotate(-45deg)";
    }

    function rotateMinorLeft(){
        console.log("Left");
        setTimeout(rotateCenter, 400);
        pokeball.style.transition = "transform 0.4s";
        pokeball.style.transform = "translate(-30px) rotate(-25deg)";
    }

    function rotateCenter(){
        console.log("Center");
        pokeball.style.transition = "transform 0.4s";
        pokeball.style.transform = "translate(0px) rotate(0deg)";
    }
}