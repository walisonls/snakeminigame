var tela = document.getElementById("tela");
var ctx = tela.getContext('2d');

document.addEventListener('keydown', tecla =>{
    console.log(tecla.key)
    switch(tecla.key){
        case "ArrowLeft":
            dirX = -1;
            dirY = 0;
        break;
        case "ArrowUp":
            dirX = 0;
            dirY = -1;
        break;
        case "ArrowRight":
            dirX = +1;
            dirY = 0;
        break;
        case "ArrowDown":
            dirX = 0;
            dirY = +1;
        break;

    }
})
//dados da cobrinha
snake = [];
positionX = 10; //posião X
positionY = 10; //posião Y
dirX = 0; //direção X
dirY = 0; //dereção Y
grid = 20; // grade
comp = 5; //comprimento da cobrinha
//comida
foodX = 5;
foodY = 5;

frame = 5;


window.onload = function() {
    setInterval(desenho, 1000/frame);
}

function desenho() {
    positionX += dirX;
    positionY += dirY;
    //movimento X
    if(positionX < 0){
        positionX = grid;
    } else if(positionX > 20){
        positionX = 0;
    }
    //movimento Y
    if(positionY < 0){
        positionY = grid;
    } else if(positionY > 20){
        positionY = 0;
    }

    //ajuste da tela
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tela.width, tela.height);

    ctx.fillStyle = "#fff"
    //crecimento da cobrinha
    for(var i = 0; i < snake.length; i++){
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid-1, grid-1);
        if(snake[i].x == positionX && snake[i].y == positionY){
            comp = 5;
        }
    }

    snake.push({x: positionX, y: positionY})
    while(snake.length > comp){
        snake.shift();
    }
    //fruta
    ctx.fillStyle = "#fff";
    ctx.fillRect(foodX * grid, foodY * grid, grid-1, grid-1)

    if(positionX == foodX && positionY == foodY) {
        comp++;
        foodX = Math.floor(Math.random() * grid)
        foodY = Math.floor(Math.random() * grid)
    }

}