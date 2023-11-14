//MENU

//Llamar elementos del HTML
let menu_responsive = document.querySelector(".checkbtn");


//Hacer funcion para agregar clase active
function agregarClase () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

//Llamar al evento
menu_responsive.addEventListener('click', agregarClase)


//FORMULARIO

//Llamar elementos del HTML
const nombreCompleto = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");
const alertaNombreIncompleto = document.getElementById("alertas");

//Hacer funcion 
function verificarInformacion () {
    
    if (nombreCompleto.value.length < 4) {
        alertaNombreIncompleto.innerText = "Nombre inválido, debes ser mayor a 4 caractéres";
        nombreCompleto.value = "";
    }
    else {
        alertaNombreIncompleto.innerText = "";
    }
}

//Escuchar al evento 
boton.addEventListener('click', verificarInformacion);  
