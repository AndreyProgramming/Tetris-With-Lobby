var canvas = document.getElementById('tetriscanvas');



var ctx = canvas.getContext('2d');
var width = canvas.width, height = canvas.height;
var blockWidth = width / columns, blockHeight = height / rows;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.getElementById("mobile-buttons").style.display = "block";
}

function drawBlock(x, y) { //Нарисовать фигуру в позиции (x,y)
    ctx.fillRect(blockWidth * x, blockHeight * y, blockWidth + 1, blockHeight + 1);
    //ctx.strokeRect(blockWidth * x, blockHeight * y, blockWidth - 1, blockHeight - 1);
}

function render() { //Нарисовать стакан и фигуры
    ctx.clearRect(0, 0, width, height);

    drawGrid();

    for (var x = 0; x < columns; x++) {
        for (var y = 0; y < rows; y++) {
            if (board[y][x]) {
                ctx.fillStyle = colors[board[y][x] - 1];
                drawBlock(x, y);
            }
        }
    }
    ctx.fillStyle = 'red';
    for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
            if (current[y][x]) {
                ctx.fillStyle = colors[current[y][x] - 1];
                drawBlock(currentX + x, currentY + y);
            }
        }
    }

    if (isPaused )
        drawPaused();
}


function drawPaused()
{
    ctx.fillStyle = "white";
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Paused", width/2, height/2);
}

function drawGrid()
{
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#333';

    for (var x = 0; x < columns; x++) {
        ctx.beginPath();
        ctx.moveTo(x * blockWidth, 0);
        ctx.lineTo(x * blockWidth, height);
        ctx.stroke();  
    }

    for (var y = 0; y < rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * blockHeight);
        ctx.lineTo(width, y * blockHeight);
        ctx.stroke();  
    }   
}

setInterval(render, 5); //частота перерисовки, мс

window.addEventListener('resize', resizingWindow, true);

function resizingWindow(event)
{
    let height = $(document).height();

    let scale = 1.67;
    let tangent = 0.5;

    canvas.height = height / scale ;
    canvas.width = height / scale * tangent;

    width = canvas.width, height = canvas.height;
    blockWidth = width / columns, blockHeight = height / rows;
}

resizingWindow();