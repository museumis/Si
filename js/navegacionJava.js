
//En esta funcion se ocultan todos los artículos y se muestra el articulo del id que se recibe en la variable articulo;
function ejecutarArticulos(articulo) {
    document.querySelector("#duke").style.opacity = 0;
    document.querySelector("#arIf").style.opacity = 0;
    document.querySelector("#ar3r").style.opacity = 0;
    document.querySelector("#artemp").style.opacity = 0;
    document.querySelector("#arConT").style.opacity = 0;
    document.querySelector("#arBlack").style.opacity = 0;
    document.querySelector("#arAho").style.opacity = 0;
    document.querySelector("#arRule").style.opacity = 0;

    document.querySelector(articulo).style.opacity = 1;
}
;


window.onload = function () {

    ejecutarArticulos("#duke");

    document.querySelector("#clickCondicional").onclick = function () {
        ejecutarArticulos("#arIf");
    };

    document.querySelector("#click3enRaya").onclick = function () {
        ejecutarArticulos("#ar3r");
    };

    document.querySelector("#clickTemperatura").onclick = function () {
        ejecutarArticulos("#artemp");
    };

    document.querySelector("#clickContar").onclick = function () {
        ejecutarArticulos("#arConT");
    };

    document.querySelector("#clickBlack").onclick = function () {
        ejecutarArticulos("#arBlack");
    };

    document.querySelector("#clickAho").onclick = function () {
        ejecutarArticulos("#arAho");
    };

    document.querySelector("#clickRule").onclick = function () {
        ejecutarArticulos("#arRule");
    };




};


