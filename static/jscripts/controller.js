var keys = { //Клавиши
    37: 'left',
    39: 'right', //Стрелки влево и вправо
    40: 'down',
    32: 'down', //Вниз - пробелом или стрелкой вниз
    38: 'rotate', //Вращение- стрелкой вверх
    27: 'escape' //Пауза по клавише Esc
};

var pressedKeys = [];

function pressedKeyDown(keyCode)
{
    if (keyCode == 38 || keyCode == 27)
    {
        if (typeof (keys[keyCode]) != 'undefined') { 
            keyPress(keys[keyCode]); 
            render(); 
        }
    }

    if (!pressedKeys.find((element) => element == keyCode ))
        pressedKeys.push(keyCode);
}

function pressedKeyUp(keyCode)
{
    pressedKeys.splice(pressedKeys.indexOf(keyCode));
}

$(window).keydown(function(event) {
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
        if (keyCode == 38 || keyCode == 27)
            continue;

        if (typeof (keys[keyCode]) != 'undefined') { 
            keyPress(keys[keyCode]); 
            render(); 
        }
    }
}

setInterval(controllerCycle, 50);