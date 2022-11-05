let email = localStorage.getItem('nombreUsuario');

function ponerEmail (){
    document.getElementById("email").value = email;
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
              <input required>
              <div class="invalid-feedback">
            Debe ingresar nombre.
          </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 my-3">
              <label>Segundo nombre</label><br>
              <input>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class=" col-lg-3 col-md-6 col-sm-12 my-3">
              <label>Apellido*</label><br>
              <input required>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 my-3">
              <label>Segundo apellido</label><br>
              <input>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class=" col-lg-3 col-md-6 col-sm-12 my-3">
              <label>E-mail*</label><br>
              <input id="email" required>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 my-3">
              <label>Teléfono de contacto</label><br>
              <input>
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

    ponerEmail();

    document.getElementById('guardarCambios').addEventListener('click', function(e) {    
        alert('holi');
        validaciones(e);
      })

        })
    } else {
        document.getElementById('alertaPerfil').classList.add('show');
    }}

accederPerfil()




function validaciones(evento) {
  
    if (!infoPerfil.checkValidity()) {
      evento.preventDefault()
      evento.stopPropagation()
    } else{
      alert("exito, ahora solo te falta guardar emi")
    }
    infoPerfil.classList.add('was-validated');
      };


function guardarInfo (){

}
  


