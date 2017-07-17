
function mostrarI(nombreCapa) {

    document.getElementById('listadoIzquierda').style.opacity = "1";

    if (document.getElementById('listadoDerecha').style.opacity) {
        document.getElementById('listadoDerecha').style.opacity = "0";
    }
    document.getElementById(nombreCapa).style.opacity = "1";

}
;

function mostrarD(nombreCapa) {

    document.getElementById('listadoDerecha').style.opacity = "1";
    if (document.getElementById('listadoIzquierda').style.opacity) {
        document.getElementById('listadoIzquierda').style.opacity = "0";
    }
    document.getElementById(nombreCapa).style.opacity = "1";
}
;

function transicion(nombreCapa) {
    document.getElementById('listadoIzquierda').style.transition = "all 31s";
}
;

//--------------------------------------------------------------------------------------------------------------------

//En esta funcion se ocultan todos los artículos y se muestra el articulo del id que se recibe en la variable articulo;
function ejecutarArticulos(articulo) {
    document.querySelector("#mariposa").style.opacity = 0;
    document.querySelector("#mariposa").style.zIndex = 0;

    document.querySelector("#datosPersonales").style.opacity = 0;
    document.querySelector("#datosPersonales").style.zIndex = 0;

    document.querySelector("#queSe").style.opacity = 0;
    document.querySelector("#queSe").style.zIndex = 0;

    document.querySelector("#arContacto").style.opacity = 0;
    document.querySelector("#arContacto").style.zIndex = 0;

    document.querySelector(articulo).style.opacity = 1;
    document.querySelector(articulo).style.zIndex = 1;

}
;


window.onload = function () {

    document.querySelector("#sobreMi").onclick = function () {
        mostrarI('listadoIzquierda');
    };


    document.querySelector("#clickPersonal").onclick = function () {
        ejecutarArticulos("#datosPersonales");
    };

    document.querySelector("#clickQueSe").onclick = function () {
        ejecutarArticulos("#queSe");

    };

    document.querySelector("#clickContacto").onclick = function () {
        ejecutarArticulos("#arContacto");

    };
};


