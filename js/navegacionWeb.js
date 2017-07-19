
//En esta funcion se ocultan todos los artículos y se muestra el articulo del id que se recibe en la variable articulo;
function ejecutarArticulos(articulo) {

    document.querySelector("#imgIdiomas").style.opacity = 0;
    document.querySelector("#imgIdiomas").style.zIndex = 0;

  
   

    document.querySelector(articulo).style.opacity = 1;
    document.querySelector(articulo).style.zIndex = 1;

}
;


window.onload = function () {

    ejecutarArticulos("#imgIdiomas");

//    document.querySelector("#clickCondicional").onclick = function () {
//        ejecutarArticulos("#arIf");
//    };



  

};


