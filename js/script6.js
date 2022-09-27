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


const reglas = {
    textos: /^[a-zA-Z0-9Á-ÿ\s]{1,}$/, //SOLO LETRAS
    numeros: /^\d{5,20}$/, //SOLO NÚMEROS
    correo: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password: /^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}

const inputs = {
    numdoc: false,
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    password: false
}

//acceder al formulario
let form = document.getElementById("frm-usuario")
let campos = document.querySelectorAll("#frm-usuario input")

//agregar listener de evento submit al formulario que se envia
form.addEventListener('submit', e => {
    e.preventDefault();//evitar que se envie el formulario para realizar las validaciones
})

const validarInput = (regla, input, grupo) => {
    if (regla.test(input.value)) {
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-square-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
        inputs[grupo] = true;
    } else {
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-square-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
        inputs[grupo] = false;
    }
}

const validarcampos = (e) => {
    console.log("se genero un evento sobre el input" + e.target.name);
    switch (e.target.name) {
        case "numdoc":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "nombre":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "apellido":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "telefono":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "correo":
            validarInput(reglas.correo, e.target, e.target.name);
            break;
            case "password":
                validarInput(reglas.password,e.target,e.target.name)
                validarPassword();
            break;
            case "password2":
                validarPassword();
        
            break;
    }
}

const validarPassword=()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('password2');

    if (pass1.value === pass2.value){
        document.getElementById(`g-password2`).classList.remove('error');

        document.getElementById(`g-password2`).classList.add('success');

        document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');

        document.querySelector("#g-password2 i").classList.add('fa-circle-check')

        document.querySelector("#g-password2 i").classList.remove('fa-triangle-exclamation')
        inputs['password'] = true;
    } else {
        document.getElementById('g-password2').classList.add('error'); 

        document.querySelector("#g-password2 .msn-error").classList.add('msn-error-visible');

        document.querySelector("#g-password2 i").classList.remove('fa-circle-check')

        document.querySelector("#g-password2 i").classList.add('fa-triangle-exclamation')
        inputs['password'] = false;
    }
}

campos.forEach((campo) => {
    campo.addEventListener("keyup", validarcampos);
    campo.addEventListener("blur", validarcampos);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const terminos = document.getElementById("terminos");


    if (inputs.numdoc && inputs.nombre && inputs.apellido && inputs.correo && inputs.telefono && inputs.password && terminos.checked) {
        alert("El usuario ah sido registrado");
        form.reset();
        document.querySelectorAll('.success').forEach(icono => {
            icono.classList.add('error')
        })
    }
    else {
        document.querySelectorAll('.success').forEach(icono => {
            icono.classList.remove('error')
        })
        document.querySelectorAll('.msn-error').forEach(icono => {
            icono.classList.add('msn-error-visible')
        })
    }

})

let btnmodal=document.getElementById("peritri");

let venmodal=document.getElementById("ventanatri");

let cermodal=document.querySelector(".cerrarmodaltri");

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
})