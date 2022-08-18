let email = document.getElementById("email").value;
let contra = document.getElementById("contra").value;



  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ingresar").addEventListener("click", validarEnvio ())

  };


  function validarEnvio (){
    if ((email.length > 0) && (contra.length > 0)) {window.location.href = "principal.html"}
  }
 




