//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});


//ejecucion modales
/*Acceder al botón para abrir el modal */

let btnmodal=document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal=document.getElementById("ventanaModalCirculo");

//Acceder al botón Cerrar de la ventana modal
let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
});

/*Circulo*/
/*Acceder al botón para abrir el modal */
let btnmodal1=document.getElementById("abrirModal1");
//Acceder ventana modal
let venmodal1=document.getElementById("ventanaModalCuadrado");
//Acceder al botón Cerrar de la ventana modal
let cermodal1=document.querySelector(".cerrarModal1");

btnmodal.addEventListener("click",()=>{
    venmodal1.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal1.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal1){
    venmodal1.style.display="none"; 
}
})

function calcularPCu(){
    let lac=parseInt(document.getElementById("ladocuadrado").value);

    let gh=parseInt(lac+lac+lac+lac);
    alert("El Perimetro del cuadrado es: "+gh)
}

/*triangulo*/


