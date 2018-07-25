function load(){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "data.html");
        xhr.onload = function(){
            var div = document.getElementById('content');
            div.innerHTML = xhr.responseText;
        };
        xhr.send();

}