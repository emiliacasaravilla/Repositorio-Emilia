let email = document.getElementById("email");
let contra = document.getElementById("contra");



function camposLlenos(){
  if ((email.value.length > 0) && (contra.value.length > 0)){
      return true
  } else {
      return false
  }
};


  let redirigir = document.getElementById("ingresar").addEventListener("click", function () {
    if (camposLlenos()) { 
      window.location.href = "principal.html" 
    } else{
      alert ('Debe escribir su email y contraseña!')
    }
});






