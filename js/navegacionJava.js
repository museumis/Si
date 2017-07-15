
//En esta funcion se ocultan todos los artículos y se muestra el articulo del id que se recibe en la variable articulo;
function ejecutarArticulos(articulo) {
    document.querySelector("#duke").style.opacity = 0;
    document.querySelector("#arIf").style.opacity = 0;   
    document.querySelector("#ar3r").style.opacity = 0;  

    document.querySelector(articulo).style.opacity = 1;


}
;


window.onload = function () {

    document.querySelector("#clickCondicional").onclick = function () {
        ejecutarArticulos("#arIf");
    };
    
      document.querySelector("#click3enRaya").onclick = function () {
        ejecutarArticulos("#ar3r");
    };
    
  


};


