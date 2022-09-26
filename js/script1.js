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


function palabra(){
    let palabra=(document.getElementById("pal").value);
    let op=document.getElementById("opcion").value;

    if(op==1){
        alert(`la longuitud de ${palabra}  es  ${palabra.length}`);
    }
    else if (op=="2"){
        alert(`${palabra} en mayusculas es ${palabra.toUpperCase(palabra)}`);
    }
    else if (op == "3"){
        alert(`${palabra} en minusculas es  ${palabra.toLowerCase(palabra)}`);
    }
    else if (op=="4"){
        alert(`El primer caracter de ${palabra}  es  ${palabra.charAt(0)}`);
    }
}



