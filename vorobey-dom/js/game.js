var b = new Bird();
    b.render();
    b.div.onclick = shoot;
    b.fly();

function shoot(){
    alert();
    // 1) find the bird
    // 2) setTimpeout(function(){}) -> .removeChild()
}
