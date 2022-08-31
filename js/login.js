let email = document.getElementById("email");
let contra = document.getElementById("contra");
let nombreDeUsuario = undefined;


function camposLlenos(){
  if ((email.value.length > 0) && (contra.value.length > 0)){
      return true
  } 
};

// otras formas de explicar la condicion de campos llenos:      email.value!==0   o  email.validity.valid



// esto es medio cualqui pero lo dejo para seguir pensando luego
function guardarNombreDeUsuario (){
  localStorage.setItem('nombreUsuario', email.value);
}


  let redirigir = document.getElementById("ingresar").addEventListener("click", function () {
    if (camposLlenos()) { 
      guardarNombreDeUsuario();
      window.location.href = "principal.html";
      
    } else{
      alert ('Debe escribir su email y contraseña!')
    }
});






