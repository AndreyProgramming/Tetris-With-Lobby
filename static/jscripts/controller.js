document.body.onkeydown = function (e) {
    pressedKeyDown(e.keyCode);
};

function pressedKeyDown(keyCode)
{
    var keys = { //Клавиши
        37: 'left',
        39: 'right', //Стрелки влево и вправо
        40: 'down',
        32: 'down', //Вниз - пробелом или стрелкой вниз
        38: 'rotate', //Вращение- стрелкой вверх
        27: 'escape' //Пауза по клавише Esc
    };
    if (typeof (keys[keyCode]) != 'undefined') { //Если код клавиши допустимый,
        keyPress(keys[keyCode]); //Передать его обработчику
        render(); //и перерисовать стакан
    }
}

let downButton = document.getElementById("downButton");

downButton.addEventListener = function (e) {
    console.log(123);
    pressedKeyDown(32);
}
