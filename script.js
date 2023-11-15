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
const alertaNombreIncompleto = document.getElementById("alerta-nombre");
const alertaCorreoDiligenciado = document.getElementById("alerta-email");
const alertaMensajeDiligenciado = document.getElementById("alerta-mensaje");
const alertaFormularioEnviado = document.getElementById("alerta-enviado");



//Hacer funcion 
function verificarInformacion () {

    if (nombreCompleto.value.length < 4) {
        alertaNombreIncompleto.innerText = "Nombre inválido, debe ser mayor a 4 caractéres";
       
    }  else {
        alertaNombreIncompleto.innerText = "";    
        
    }

    if (email.value == "" ) {
        alertaCorreoDiligenciado.innerText = "Debes diligenciar un correo válido";
        
    } else {
        alertaCorreoDiligenciado.innerText = "";
       
    }

    if (mensaje.value == "" ) {
        alertaMensajeDiligenciado.innerText = "Debes colocar un mensaje";
        
    } else {
        alertaMensajeDiligenciado.innerText =  "";
       
    }
    
    if (nombreCompleto.value.length > 4 && email.value !== "" && mensaje.value !== "" ) {
        alertaFormularioEnviado.innerText = "Su información ha sido enviada";
        nombreCompleto.value = "";
        email.value = "";
        mensaje.value = "";
    } 

    else {
        alertaFormularioEnviado.innerText = "";
        
    }

}

//Escuchar al evento 
boton.addEventListener('click', verificarInformacion);  
