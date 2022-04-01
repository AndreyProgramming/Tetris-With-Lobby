let buttonDown = document.getElementById("button-down");
let buttonMoveLeft = document.getElementById("button-move-left");
let buttonMoveRight = document.getElementById("button-move-right");
let buttonRotateLeft = document.getElementById("button-rotate-left");
let buttonRotateRight = document.getElementById("button-rotate-right");
let buttonFallImmediate = document.getElementById("button-fall-immediate");
let buttonRotateTwice = document.getElementById("button-rotate-twice");
let buttonSwapFigures = document.getElementById("button-swap");

var holding_keys = { //Клавиши
    37: 'left',
    39: 'right', //Стрелки влево и вправо
    40: 'down',
};

var once_keys = {
    32: 'immediate-fall', //Вниз - пробелом или стрелкой вниз
    38: 'rotate-left', 
    65: 'rotate-twice',
    90: 'rotate-right',//Вращение- стрелкой вверх
    27: 'escape', //Пауза по клавише Esc
    67: 'swap-figures'
}

var pressedKeys = [];

function pressedOnceButton(keyCode)
{
    if (typeof (once_keys[keyCode]) != 'undefined') { 
        keyPress(once_keys[keyCode]); 
        render(); 
    }
}

function pressedKeyDown(keyCode)
{
    if (!pressedKeys.find((element) => element == keyCode ))
        pressedKeys.push(keyCode);
}

function pressedKeyUp(keyCode)
{
    pressedKeys.splice(pressedKeys.indexOf(keyCode));
}

$(window).keydown(function(event) {
    pressedOnceButton(event.keyCode);
    pressedKeyDown(event.which);
});


$(window).keyup(function(event) {
    pressedKeyUp(event.which);
})

function controllerCycle()
{
    for (let i = 0; i < pressedKeys.length; i++)
    {
        let keyCode = pressedKeys[i];

        if (typeof (holding_keys[keyCode]) != 'undefined') { 
            keyPress(holding_keys[keyCode]); 
            render(); 
        }
    }
}

buttonDown.addEventListener("touchstart", function(event) {
    pressedKeyDown(40);
});
buttonDown.addEventListener("touchend", function(event) {
    pressedKeyUp(40);   
})
buttonMoveLeft.addEventListener("touchstart", function(event) {
    pressedKeyDown(37);
});
buttonMoveLeft.addEventListener("touchend", function(event) {
    pressedKeyUp(37);   
})
buttonMoveRight.addEventListener("touchstart", function(event) {
    pressedKeyDown(39);
});
buttonMoveRight.addEventListener("touchend", function(event) {
    pressedKeyUp(39);   
})
buttonRotateLeft.addEventListener("touchstart", function(event) {
    pressedOnceButton(38);
});
buttonRotateRight.addEventListener("touchstart", function(event) {
    pressedOnceButton(90);
});
buttonFallImmediate.addEventListener("touchstart", function(event) {
    pressedOnceButton(32);
});
buttonRotateTwice.addEventListener("touchstart", function(event) {
    pressedOnceButton(65);
});
buttonSwapFigures.addEventListener("touchstart", function(event) {
    pressedOnceButton(67);
});

setInterval(controllerCycle, 50);