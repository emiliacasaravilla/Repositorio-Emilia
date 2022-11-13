//Entrega 7

//traigo el mail (identificador de usuario) que está en el local storage
let email = localStorage.getItem('nombreUsuario');


//función que se encarga de poner el mail en su inputs correspondiente, y si lo hubiera porque el usuario 
//ya cargó sus datos en el perfil, muestra en pantalla esos datos (almacenados en el local storage)
function ponerDatos (){
  document.getElementById("email").value = email;
  
  document.getElementById("nombre").value = localStorage.getItem('nombre');
  document.getElementById("apellido").value = localStorage.getItem('apellido');
  document.getElementById("segundoApellido").value = localStorage.getItem('segundoApellido');
  document.getElementById("segundoNombre").value = localStorage.getItem('segundoNombre');
  document.getElementById("telefono").value = localStorage.getItem('telefono');
}


// la función validaciones chequea que los inputs obligatorios del form están completos
//si no es así muestra aviso de que faltan y corta el evento
//de lo contrario (o sea, si los datos necesarios están), llama a la función guardar info
function validaciones(evento) {
  
  if (!infoPerfil.checkValidity()) {
    evento.preventDefault()
    evento.stopPropagation()
  } else{
    guardarInfo ()
  }
  infoPerfil.classList.add('was-validated');
    };


//la función guardarInfo guarda en una variable el value que el usuario haya puesto en los inputs
//y almacena en el local sotrage cada valor, con un nombre que identifique ese dato   
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


//la función de acceder al perfil hace varias cosas:
//para empzar chequea si el usuario está logueado, revisando ese dato en e local sotage
//si está logeado: muestra el form con los datos del perfil, y llama a la función que carga los datos almacenados
//también agrego acá la escucha de envento para el botón de "guardar cambios", 
//que lo que hace es llamar a la función validaciones
//si el usuario no está logueado se mestra en pantalla la alerta, que ofrece botón para ir a logearse
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



//finalmente llamamos a la función accederPerfil
accederPerfil();




