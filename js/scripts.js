var boton_menu = document.getElementById('boton-menu');
var menu_nav = document.getElementById('menu-navegacion');

var boton_inicio = document.getElementById('boton-inicio');
var boton_perfil = document.getElementById('boton-perfil');
var boton_contacto = document.getElementById('boton-contacto');

var seccion_intro = document.getElementById('intro');
var seccion_perfil = document.getElementById('perfil');
var seccion_contacto = document.getElementById('contacto');



function visibilidad_menu (x){
    if (window.getComputedStyle(x).display === "none"){
       x.style.display = "grid" ;
    } else {
        x.style.display = "none";
    };
};


boton_menu.addEventListener('click', function (){
    visibilidad_menu(menu_nav);
});


function cambiarEstado(b, c, d){
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
}

function cambiar_seccion (a, b, c, d){
    a.addEventListener('click', function(){
        cambiarEstado(b, c, d);
        visibilidad_menu(menu_nav);
        seccionEnTitulo ( seccion_intro, seccion_perfil, seccion_contacto)
    });
};



function seccionEnTitulo(a, b, c){
    if ( a.style.display !== "none"){
        document.getElementById("Titulo").innerHTML = "Inicio";
    }
    else if (b.style.display !== "none"){
        document.getElementById("Titulo").innerHTML = "Perfil";
    }
    else if (c.style.display !== "none"){
        document.getElementById("Titulo").innerHTML = "Contacto";
    };
};

cambiar_seccion (boton_inicio, seccion_intro, seccion_perfil, seccion_contacto);
cambiar_seccion (boton_perfil, seccion_perfil, seccion_intro, seccion_contacto);
cambiar_seccion (boton_contacto, seccion_contacto, seccion_intro, seccion_perfil);

