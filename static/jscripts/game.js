var columns = 10, rows = 20; //Классические размеры стакана
var board = []; //Стакан
var lose; //Конец игры
var lines = 0; //Убрано линий
var count = 0; //Счёт
var maxCount = 0; //Рекорд
var interval; //Скорость игры в мс
var current; //Текущая фигурка

var swapped_figure = null;

var defaultGameSpeed = 500;

var isPaused = false;
var isMultiplayer = false;
var currentX, currentY; //Позиция текущей фигурки
var presavedShapes = []
var shapes = [ //Массив фигур
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]], //I
  [[0, 0, 0], 
    [1, 1, 1], 
    [0, 0, 1]], // L
  [[0, 0, 1],
    [1, 1, 1], //J
    [0, 0, 0],],
  [[0, 0, 0, 0], 
    [0, 1, 1, 0], //O
    [0, 1, 1, 0],
    [0, 0, 0, 0]],
  [[0, 0, 0],
    [1, 1, 0], //Z
    [0, 1, 1]],
  [[0, 0, 0],
    [0, 1, 1], //S
    [1, 1, 0]],
  [[0, 1, 0], //T
    [1, 1, 1],
    [0, 0, 0]]
];

var colors = [ //Массив цветов
  '#0F9BD7', '#E35B02', '#2141C6', '#E39F02', '#D70F37', '#59B101', '#AF298A'
];
var shaped = 0; //Есть ли следующая фигурка
var savedShape; //Следующая фигурка

function drawNewShape(canvasName, figure) { //Нарисовать следующую фигуру на отдельной канве
  var canvas = document.getElementById(canvasName);
  var ctx = canvas.getContext('2d');
  var width = canvas.width, height = canvas.height;
  var blockWidth = width / 4, blockHeight = height / 4;
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'white';
  ctx.clearRect(0, 0, width, height);
  for (var y = 0; y < figure.length; y++) {
    for (var x = 0; x < figure[0].length; x++) {
      if (figure[y][x]) {
        ctx.fillStyle = colors[figure[y][x] - 1];
        ctx.fillRect(blockWidth * x, blockHeight * y, blockWidth, blockHeight);
      }
    }
  }
}

function swapFigures() {
  if (swapped_figure == null)
  {
    swapped_figure = current;
    newShape();
    drawNewShape("swap-figure-canvas", swapped_figure);
    return;
  }
  let temp = current;
  current = swapped_figure;
  swapped_figure = temp;
  drawNewShape("swap-figure-canvas", swapped_figure);
}

function generateShape() { //Сгенерировать следующую фигуру
  var id = Math.floor(Math.random() * shapes.length);
  var shape = shapes[id];
  var figureShape = [];
  for (var y = 0; y < shape.length; y++) {
    figureShape[y] = [];
    for (var x = 0; x < shape[0].length; x++) {
      if (shape[y][x]) 
        figureShape[y][x] = id + 1;
      else 
        figureShape[y][x] = 0;
    }
  }
  return figureShape;
}

function immediateFall() {
  let maxY = 0;
  while (valid(0, maxY + 1, current))
  {
    maxY++;
  }
  currentY += maxY;
}

function newShape() { //Создать новую фигурку 4x4 в массиве current
  current = [];
  if (shaped) { //Есть сохранённая
    for (var i = 0; i < savedShape.length; i++) 
      current[i] = savedShape[i];
  }
  else { //Нет сохранённой
    current = generateShape();
    shaped = 1;
  }
  savedShape = presavedShapes.shift();
  presavedShapes.push(generateShape());
  if (shaped) {
    drawNewShape('figurecanvas1', savedShape);
    for (let i = 2; i < 4; i++) { 
      drawNewShape('figurecanvas' + i, presavedShapes[i - 2]);
    }
  } 
  currentX = Math.ceil((columns - 4) / 2) + 1; 
  currentY = 0; //Начальная позиция новой фигурки
}

function init() { //Очистить стакан
  presavedShapes.push(generateShape());
  presavedShapes.push(generateShape());
  for (var y = 0; y < rows; ++y) {
    board[y] = [];
    for (var x = 0; x < columns; x++) 
      board[y][x] = 0;
  }
}

function countPlus(lines0) { //Подсчёт очков
  lines += lines0;
  var bonus = [0, 100, 300, 700, 1500];
  count += bonus[lines0];
  if (count > maxCount) 
    maxCount = count;
  document.getElementById('tetriscount').innerHTML =
    "Линий: " + lines + "<br>Очки: " + count + "<br>Рекорд: " + maxCount;
}

function freeze() { //Остановить фигурку и записать её положение в board
  for (var y = 0; y < current.length; y++) {
    for (var x = 0; x < current[0].length; x++) {
      if (current[y][x]) 
        board[y + currentY][x + currentX] = current[y][x];
    }
  }
}

function rotate(current) { //Вращение текущей фигурки current против часовой стрелки
  var newCurrent = [];
  for (var y = 0; y < current.length; y++) {
    newCurrent[y] = [];
    for (var x = 0; x < current[0].length; x++) 
      newCurrent[y][x] = current[current[0].length - x - 1][y];
  }
  return newCurrent;
}

function clearLines() { //Проверить, есть ли заполненные линии и очистить их
  var cleared = 0;
  for (var y = rows - 1; y > -1; y--) {
    var rowFilled = true;
    for (var x = 0; x < columns; x++) {
      if (board[y][x] == 0) {
        rowFilled = false;
        break;
      }
    }
    if (rowFilled) { //Очистить линию
      cleared++;
      for (var yy = y; yy > 0; yy--) {
        for (var x = 0; x < columns; x++) {
          board[yy][x] = board[yy - 1][x];
        }
      }
      y++;
    }
  }
  return cleared;
}

function keyPress(key) { //Обработчик нажатий клавиш
  if (key == 'escape')
  {
    isPaused = !isPaused;
    //document.getElementById("pause-window").style.display = isPaused ? 'block' : 'none';
  } 

  if (isPaused && !isMultiplayer)
    return;

  switch (key) {
    case 'left':
      if (valid(-1)) 
        --currentX;
      break;
    case 'right':
      if (valid(1)) 
        ++currentX;
      break;
    case 'down':
      if (valid(0, 1, current)) 
        ++currentY;
      break;
    case "immediate-fall":
      immediateFall();
      break;
    case 'rotate-left':
      var rotated = rotate(current);
      if (valid(0, 0, rotated)) 
        current = rotated;
      break;
    case 'rotate-right':
      var rotated = rotate(current);
      if (valid(0, 0, rotated)) 
        rotated = rotate(rotated);
        if (valid(0, 0, rotated)) 
          rotated = rotate(rotated);
          if (valid(0, 0, rotated)) 
            current = rotated;
      break;
    case 'rotate-twice':
      var rotated = rotate(current);
      if (valid(0, 0, rotated)) 
        rotated = rotate(rotated);
        if (valid(0, 0, rotated)) 
          current = rotated;
    case 'swap-figures':
      swapFigures();
      break;
  }
}

function valid(offsetX, offsetY, newCurrent) { //Проверка допустимости итоговой позиции фигуры current
  offsetX = offsetX || 0;
  offsetY = offsetY || 0;
  offsetX = currentX + offsetX;
  offsetY = currentY + offsetY;
  newCurrent = newCurrent || current;
  for (var y = 0; y < newCurrent.length; y++) {
    for (var x = 0; x < newCurrent[0].length; x++) {
      if (newCurrent[y][x]) {
        let isOutOfBounds = typeof (board[y + offsetY]) == 'undefined' 
                          || typeof (board[y + offsetY][x + offsetX]) == 'undefined'
                          || board[y + offsetY][x + offsetX]
                          || x + offsetX < 0 
                          || y + offsetY >= rows 
                          || x + offsetX >= columns;


        if (isOutOfBounds) 
        {
          if (offsetY == 1 && currentY == 0) 
            lose = true; //Конец игры, если текущая фигура - на верхней линии
          return false;
        }
      }
    }
  }
  return true;
}


function playGame() { //Контроль падения фигурки, создание новой и очистка линии
  if (isPaused && !isMultiplayer)
    return;
  if (valid(0, 1)) 
  {
    currentY++;
  }
  else 
  {
    freeze();
    var cleared = clearLines();
    if (cleared) 
      countPlus(cleared);

    if (lose) {
      newGame();
      return false;
    }
    newShape();
  }
}

function changeGameSpeed(newGameSpeed)
{
  if (isMultiplayer)
    return;
     
  let speed = 1000 - newGameSpeed;
  clearInterval(interval);
  interval = setInterval(playGame, speed);
}
      
function newGame() { //Новая игра
  clearInterval(interval);
  init();
  shaped = 0; 
  newShape();
  lose = false; lines = 0; count = 0; countPlus(0);
  interval = setInterval(playGame, defaultGameSpeed); //скорость игры, мс
}
