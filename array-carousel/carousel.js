var slides = [
  {
    title: "My first slide",
    url: "https://visitpottertioga.com/wp-content/uploads/2017/04/Susquehannock-St-Forest-600x400.jpg"
  },
  {
    title: "My second one",
    url: "https://www.novalisproject.org/wp-content/uploads/2015/12/Fire-forest-600x400.jpg"
  },
  {
    title: "The last",
    url: "http://villaforest.rs/wp-content/uploads/2016/07/1-Forest-600x400.jpg"
  }
];

function showSlide( index ){
  // console.log( slides[index] );
  var div = document.body.children[0];    // se poate dupa asta asa: div.innerHTML
  div.innerHTML += `
    <div>
      <h2>${slides[index].title}</h2>
      <img src="${slides[index].url}">
    </div>
  `;
}

function showCarousel(){
  // clear
  var div = document.body.children[0];
  div.innerHTML = '';
  for(var i = 0; i < 3; i++){
    showSlide(i);
  }
}

function prev(){
  // push, pop, unshift, shift
  slides.push( slides.shift() );
  showCarousel();
}
function next(){
  slides.unshift( slides.pop() );
  showCarousel();
}


///////////////////////////////////////////////////////////
showCarousel();
setInterval( next, 3000 )

// setTimeout ( f, interval )
// setInterval ( f, interval )
// clearTimeout ( id)
// clearInterval ( id )


////////////////////////////////
var n = 1;
setTimeout( function(){ alert(n) }, 500 );

while ( n <= 10 ){
  n++;
}
// why 11
