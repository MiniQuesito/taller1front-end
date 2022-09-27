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

function convertir(){
    let tem=parseInt(document.getElementById("num").value);
    let de=document.getElementById("opcion1").value;
    let para=document.getElementById("opcion2").value;
    if(de==1 && para==1){
        document.getElementById('resultado').value = (`ERROR`);
    }
    if(de==2 && para==2){
        document.getElementById('resultado').value = (`ERROR`);
    }
    if(de==3 && para==3){
        document.getElementById('resultado').value = (`ERROR`);
    }
    
    if(de==1 && para==2){
        document.getElementById('resultado').value = ((tem-32)/1.8);
    }
    if(de==1 && para==3){
        document.getElementById('resultado').value = ((tem-32)*5/9)+273.15;
    }
    if(de==2 && para==1){
        document.getElementById('resultado').value = (tem*9/5)+32;
    }
    if(de==2 && para==3){
        document.getElementById('resultado').value = tem+273.15;
    }
    if(de==3 && para==1){
        document.getElementById('resultado').value = ((tem-273.15)*9/5+32)+32;
    }
    if(de==3 && para==2){
        document.getElementById('resultado').value = tem+273.15;
    }

}

