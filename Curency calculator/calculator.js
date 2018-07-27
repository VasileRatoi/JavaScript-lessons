const KEY = '5bf7c94e07af38a0b723747b9b273cff';
const URL = 'http://data.fixer.io/api/';
var   base = 'EUR';
var   date = '2018-07-26';
var   eur_to_mdl = 0;

function load(){
    var xhr = new XMLHttpRequest();
        xhr.open( "GET", URL + date + '?access_key=' + KEY + '&base=' + base );
        xhr.onload = function(){
            // Convertam JSON in obiect
            var data = JSON.parse( xhr.responseText );
            // console.log( data.rates.MDL );
            eur_to_mdl = data.rates.MDL;

            // incarcam toate valutele in select
            var rates = Object.keys( data.rates );
            for(var i = 0; i<rates.length;i++){
                rates[i];
                // Prin createelement si appendchild de adaugat in option
            }
        };
        xhr.send();
}
load();

function convert(){
    var euro = document.getElementById('euro');  
    var mdl = document.getElementById('mdl');
    mdl.value = euro.value * eur_to_mdl;
    
}