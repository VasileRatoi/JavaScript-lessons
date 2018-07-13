var road  = document.getElementById('road');
var y     = 0;
var speed = 5;

function createCar(){
  var car = document.createElement('div');
      car.id = 'car';
      road.appendChild( car );

}



function move(){
  y+=speed;
  road.style.backgroundPosition='0px ' + y + 'px';
}


function action(){
  if ( event.keyCode == 38 ){
    speed++;
  }
  if ( event.keyCode == 40 ){
    speed--;
  }
}


setInterval ( move, 20 );
createCar();
