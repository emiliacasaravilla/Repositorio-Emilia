let email = localStorage.getItem('nombreUsuario');


function ponerDatos (){
    document.getElementById("email").value = email;
  
   document.getElementById("nombre").value = localStorage.getItem('nombre');
   document.getElementById("apellido").value = localStorage.getItem('apellido');
   document.getElementById("segundoApellido").value = localStorage.getItem('segundoApellido');
   document.getElementById("segundoNombre").value = localStorage.getItem('segundoNombre');
   document.getElementById("telefono").value = localStorage.getItem('telefono');
}


function accederPerfil (){
  if(email != undefined) {
      document.addEventListener("DOMContentLoaded", function (){

let htmlContentToAppend = "";
  
  htmlContentToAppend += `
  <div class="p-4">  
      <h2 class="mt-5">Perfil</h2>
      <hr>
      <form id='infoPerfil' class="needs-validation" novalidate>
        <div class="row d-flex justify-content-center">
          <div class=" col-lg-3 col-md-6 col-sm-12 my-3">
            <label>Nombre*</label><br>
            <input id='nombre' required>
            <div class="invalid-feedback">
          Debe ingresar nombre.
        </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-3">
            <label>Segundo nombre</label><br>
            <input id='segundoNombre'>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class=" col-lg-3 col-md-6 col-sm-12 my-3">
            <label>Apellido*</label><br>
            <input id='apellido'required>
            <div class="invalid-feedback">
          Debe ingresar apellido.
        </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-3">
            <label>Segundo apellido</label><br>
            <input id='segundoApellido'>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class=" col-lg-3 col-md-6 col-sm-12 my-3">
            <label>E-mail*</label><br>
            <input id="email" required>
            <div class="invalid-feedback">
          Debe ingresar e-mail.
        </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-3">
            <label>Teléfono de contacto</label><br>
            <input id='telefono'>
          </div> 
        </div>
        <div class="row"> 
        <div class="col-10">
        <input type="submit" class="btn btn-outline-dark" id="guardarCambios" value='Guardar cambios'> 
          </div>
          </div>

      </form>
    </div> `    
  document.getElementById("formularioPerfil").innerHTML = htmlContentToAppend;

  ponerDatos();

  document.getElementById('guardarCambios').addEventListener('click', function(e) {    
    validaciones(e);
  })
      })
  } else {
      document.getElementById('alertaPerfil').classList.add('show');
  }}


 
function validaciones(evento) {
  
  if (!infoPerfil.checkValidity()) {
    evento.preventDefault()
    evento.stopPropagation()
  } else{
    guardarInfo ()
  }
  infoPerfil.classList.add('was-validated');
    };


    
function guardarInfo () {
  let nombre= document.getElementById("nombre").value ;
  let segundoNombre= document.getElementById("segundoNombre").value ;
  let apellido = document.getElementById("apellido").value
  let segundoApellido= document.getElementById("segundoApellido").value ;
  let telefono= document.getElementById("telefono").value ;
  
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('segundoNombre', segundoNombre);
  localStorage.setItem('segundoApellido', segundoApellido);
  localStorage.setItem('telefono', telefono);
  
}


accederPerfil();




