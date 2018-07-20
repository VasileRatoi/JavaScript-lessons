var shots = 0;
var kills = 0;
var panel = document.getElementById('panel');

var b = new Bird();
    b.render();
    b.div.onclick = shoot;
    b.fly();

function shoot(){
    kills++;
    panel.innerHTML = '<h1> Kills: ' +kills+ '</h1>';
    b.die();
    b = new Bird();
    b.render();
    b.fly();
    b.div.onclick = shoot;


}
