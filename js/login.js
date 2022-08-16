
let email = document.getElementById("email")
let contra = document.getElementById("contra")

function camposLlenos (){
    if ((email.value.length > 0) && (contra.value.length > 0)){
        return true
    } else{
        return false}
    }


function validarRegistro (){
    if (camposLlenos){window.location.href = "index.html"};
};

let ingresar = document.getElementById("ingresar").addEventListener("click", validarRegistro ());
