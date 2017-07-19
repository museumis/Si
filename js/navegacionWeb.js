
//En esta funcion se ocultan todos los artículos y se muestra el articulo del id que se recibe en la variable articulo;
function ejecutarArticulos(articulo) {

    document.querySelector("#imgIdiomas").style.opacity = 0;
    document.querySelector("#imgIdiomas").style.zIndex = 0;

    document.querySelector('#artCrearArticulo').style.opacity = 0;
    document.querySelector('#artCrearArticulo').style.zIndex = 0;


    document.querySelector(articulo).style.opacity = 1;
    document.querySelector(articulo).style.zIndex = 1;

}
;

//funcion para crear articulos
function articulo() {

    var texto = " \n\&lt;!-- %HTML %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --&gt;\n\
 \n\
 &lt;article class='articulo' id='" + document.querySelector("#id").value + "'&gt;\n\
 &lt;h5&gt;&lt;strong&gt;" + document.querySelector("#titulo").value + "&lt;/strong&gt;&lt;/h5&gt;\n\
 &lt;time&gt;" + document.querySelector("#fecha").value + "&lt;/time&gt;\n\
 &lt;p&gt;" + document.querySelector("#descrip").value + "&lt;/p&gt;\n\
 &lt;a href='" + document.querySelector("#url").value + "' title='Repositorio Github' target='vtr'&gt;" + document.querySelector("#tituloUrl").value + "&lt;/a&gt; \n\
 &lt;p&gt;" + "Salidad del programa: " + "&lt;/p&gt;\n\
 &lt;pre&gt;&lt;code&gt;&lt;samp&gt;" + document.querySelector("#salidaPro").value + "  &lt;/samp&gt;&lt;/code&gt;&lt;/pre&gt; \n\
 &lt;p&gt;" + document.querySelector("#descripFinal").value + "&lt;/p&gt;\n\
 &lt;footer&gt;by Ismael Martin&lt;/footer&gt; \n\
 &lt;/article&gt;\n\
\n\&lt;!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --&gt;\n\
\n\ &lt;li id='" + document.querySelector("#nombreClick").value + "'&gt;&lt;h4&gt;" + document.querySelector('#nomListaIzquierda').value + "&lt;/h4&gt;&lt;/li&gt;\n\
\n\&lt;!-- %JS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --&gt;\n\
 document.querySelector('#" + document.querySelector("#nombreClick").value + "').onclick = function () {ejecutarArticulos('#" + document.querySelector("#id").value + "');};\n\
\n\ document.querySelector('#" + document.querySelector("#id").value + "').style.opacity = 0;\n\
 document.querySelector('#" + document.querySelector("#id").value + "').style.zIndex = 0;\n\
\n\&lt;!-- %CSS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --&gt;\n\
\n\#" + document.querySelector('#id').value + "{opacity:0;}";
    return texto;
}


window.onload = function () {

    ejecutarArticulos("#imgIdiomas");

    document.querySelector("#enviar").onclick = function () {
        document.querySelector("#salida").innerHTML = articulo();
    };

    document.querySelector('#clickGenerar').onclick = function () {
        ejecutarArticulos('#artCrearArticulo');
    };

};



