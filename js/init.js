const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";   
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/"; 
//ejemplo const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";    
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";


//let productosCarrito = undefined;

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



//function ponerNombreUsuario (){
   //let htmlContentToAppend = localStorage.getItem('nombreUsuario');
  //document.getElementById("nombreDeUsuario").innerHTML = htmlContentToAppend;
//}

//ponerNombreUsuario();

//ESTA FUNCION ERA DE UNA ENTRGA ANTERIOR PERO LA OCULTE PORQUE LO DE ABAJO DEL MENU
//DESPLEGABLE LO DEJA INNECESARIO, YA QUE EL MENU SE ENCAGA DE GUARDAR EL NOMBRE

//Creé la función que a través del getitem accede a la info guardada en el alacenamiento local
//Agregué esa info (el mail) con en el espacio que ya estaba creado en todos los html
//(lo que les tuve que agregar fue un id igual a todos: nombreDeUsuario)
//Lo hice desde init porque es un archivo que esta anexado a todos los html, así esa info aparece en todas 
//las ventanas del sitio
//Luego invoqué la funcion 


function cerrarSesion(){
  localStorage.removeItem('nombreUsuario');

}


function agregarMenuDesplegable (){
  
  let htmlContentToAppend = ""; 
  htmlContentToAppend += ` 
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  ${localStorage.getItem('nombreUsuario')}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="cart.html" role="button">Mi carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html" role="button">Mi perfil</a></li>
    <li><a class="dropdown-item" href="index.html" onclick="cerrarSesion()" role="button">Cerrar sesión</a></li>
  </ul>
</div>
  `    
document.getElementById("nombreDeUsuario").innerHTML = htmlContentToAppend;
};
agregarMenuDesplegable ();

//ENTREGA 4
//dejé de usar la función usada en ej anteriores para mostrar el nombre de usuario en la barra
//creé la función para hacer el dropdown en donde está el nombre del usuario
//esta función agrega contenido al html, a la sección con el id "nombreDeUsuario"
//en el div de clase dropdown primero puse un botón, y para el texto del botón es que llamo con un get al
//nombre de usuario que está en el local storage
//en el listado de elementos del dropdown uso elementos con etiqueta <a> para que me redirija 
//a las páginas: carrito, perfil y a la ide index para cerras sesión.
//para efectuar el cerrado de sesión creé una función que con el metodo remove borra el nombre
//de usuario almacenado en el local storage y llamo a esa función agregando un onclick en el <a> de cerrar sesión
//finalmente, llamo a la función agregarMenuDesplegable ()
  

  
 
