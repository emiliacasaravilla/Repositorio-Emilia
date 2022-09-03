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


//Le agregué a la escucha de venento que al hacer click en ingresar, antes de redirigir, 
//invoque la función de guardar nombre de usuario

  let redirigir = document.getElementById("ingresar").addEventListener("click", function () {
    if (camposLlenos()) { 
      guardarNombreDeUsuario();
      window.location.href = "principal.html";
      
    } else{
      alert ('Debe escribir su email y contraseña!')
    }
});








