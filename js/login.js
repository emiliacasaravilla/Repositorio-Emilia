let email = document.getElementById("email");
let contra = document.getElementById("contra");
let nombreDeUsuario = undefined;


function camposLlenos(){
  if ((email.value.length > 0) && (contra.value.length > 0)){
      return true
//otras formas de explicar la condicion de campos llenos:  email.value!==0   o  email.validity.valid

    } 
};



//Acá creé la función que guarda la info en el almacenamiento local

function guardarNombreDeUsuario (){
  localStorage.setItem('nombreUsuario', email.value);
}


//Más abajo, antes de redirigir, invoco la función

  let redirigir = document.getElementById("ingresar").addEventListener("click", function () {
    if (camposLlenos()) { 
      guardarNombreDeUsuario();
      window.location.href = "principal.html";
      
    } else{
      alert ('Debe escribir su email y contraseña!')
    }
});








