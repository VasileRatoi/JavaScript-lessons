var canvas;

////////////////////////Helpers/////////////////////////
function randCoord(){
    return Math.floor( Math.random() * 500 );
}
////////////////////////Helpers/////////////////////////

function startGame(){
    canvas = document.getElementById('map').getContext('2d');
    var snake = new Snake(canvas);
        snake.render(canvas);
    var bomb = new Bomb(canvas);
        bomb.render();
        setTimeout(function(){ bomb.clear();}, 1000);
    var mouse = new Mouse(canvas);
        mouse.render();
}
startGame();