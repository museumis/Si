
function mostrarI(nombreCapa) {

    document.getElementById('listadoIzquierda').style.opacity = "1";
    transicion("listadoIzquierda");

    if (document.getElementById('listadoDerecha').style.opacity) {
        document.getElementById('listadoDerecha').style.opacity = "0";
    }
    document.getElementById(nombreCapa).style.opacity = "1";    

}
;

function mostrarD(nombreCapa) {

    document.getElementById('listadoDerecha').style.opacity = "1";
    transicion("listadoDerecha");
    if (document.getElementById('listadoIzquierda').style.opacity) {
        document.getElementById('listadoIzquierda').style.opacity = "0";
    }
    document.getElementById(nombreCapa).style.opacity = "1";    
}
;

function transicion(nombreCapa) {
    document.getElementById(nombreCapa).style.transition = "all 0.3s";
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
     document.querySelector(articulo).style.transition = "all 0.3s";    
    if(articulo==="#mariposa"){
    document.querySelector(articulo).style.transition = "all 0.8s";
    document.querySelector(articulo).style.transform= "rotateY(360deg)";}

}
;


window.onload = function () {

    ejecutarArticulos("#mariposa");
    
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


