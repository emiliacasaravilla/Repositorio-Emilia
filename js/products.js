

let precioMin = undefined;
let precioMax = undefined;
//declaré las variables de precio minimo y maximo, y las deje indefinidas, ya que son las que el usuario va a llenar

let arrayProductos = [];
let actualProductosArray = [];
let actualSortCriterio = undefined;
const ordenarPorPrecioDesc = "precioAs";
const ordenarPorPrecioAsc = "precioDes";
const ordenarPorRelevanciaDesc = "Relev";



//declaré las variables: arrays de productos (la original y la qye se va a ir actualizando al hacer el sort) 
//y por otrolado las que me van ayudar a setear el criterio para el sort


function redireccionar (id){
    localStorage.setItem("id", id)
    window.location = "product-info.html";
}

//Entrega 3
//armé la función redireccionar que toma como parámetro el id del producto, y lo que hace la función
//es, primero guardar el id en el local storage
//luego redireccionar a product info


function sortProductos(criterio, array){
    let resultado = [];
    if (criterio === ordenarPorPrecioAsc )
    {
        resultado = array.sort(function(a, b) {
            return parseInt(a.cost) - parseInt(b.cost) 
           
        });
    }else if (criterio === ordenarPorPrecioDesc){
        resultado = array.sort(function(a, b) {
            return parseInt(b.cost) - parseInt(a.cost) 
        });
    }else if (criterio === ordenarPorRelevanciaDesc){
       resultado = array.sort(function(a, b) {
          return parseInt(a.soldCount) - parseInt(b.soldCount)       
        });
    }
    return resultado;
}

//Esta función toma como parámetros: por un lado el nombre del criterio para ejecutar el sort y por otro
//lado un array (más adelante al ejecutara usaremos el de productos)
//La función sirve para explicarle a cada criterio lo que tiene que hacer. Ya que estamos tratando con 
//números, a diferencia de con caracteres como en el caso de la función similar en categories, podemos 
//simplemente setear que vaya haciendo restas de dos elementos del array. 
//Para el orden ascendente a-b , y para el orden descendente b-a
//Si la resta da 0 el orden de los elementos no cambia
//Si da positivo significa que a es mayor que b en el criterio de ordenamiento
//Si da negativo significa que a es menor que b en el criterio de ordenamiento

function mostrarProductos(){


    let htmlContentToAppend = "";
 
//A la función que muestra los productos, creada para la entrega 1, le agregué las funcionalidades para 
//que recorra con un FOR el array de productos que ya tenía y con un condicional que vaya chequeando las 
//diferentes opciones para ser ejecutada: 
// 1) si los precios no están definidos
// 2) si los rangos de max y min están definidos ambos
// 3 y 4) o si uno está definido y el otro no
// En cualquiera de los casos la función muestra productos, pero solo muestra los que entren en el rango 
//(cuando sea llamada, más abajo)

   for (let productos of arrayProductos){

    if ((precioMin== undefined && precioMax == undefined) || (parseInt(productos.cost)>=precioMin && parseInt(productos.cost)<=precioMax) || (parseInt(productos.cost) >= precioMin && precioMax==undefined) || (parseInt(productos.cost) <= precioMax && precioMin== undefined)){
     //  if (search == undefined || search == "" || productos.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1) {
//Entrega 3
//aca ejecuto la funcion de redireccionamiento, con el evento onclick 
        htmlContentToAppend += `
        <div onclick="redireccionar(${productos.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-4 col-lg-3">
                    <img src="${productos.image}" alt="${productos.description}" class="img-thumbnail">
                </div>
                <div class="col-8 col-lg-9">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${productos.name} - ${productos.currency} ${productos.cost} </h4>
                        <small  class="text-muted  d-none d-md-block">${productos.soldCount} artículos</small>
                    </div>
                    <p class="text-muted  d-md-none">${productos.soldCount} artículos</small>
                    <p >${productos.description}</p>
                </div>
            </div>
        </div>
        `
    }

       document.getElementById("listaProductos").innerHTML = htmlContentToAppend;
     

    }};



function sortYMostrarProductos(sortCriterio, arrayProductos){
        actualSortCriterio = sortCriterio;
    
        if(arrayProductos != undefined){
            actualProductosArray = arrayProductos;
        }
       
        actualProductosArray = sortProductos(actualSortCriterio, actualProductosArray);
    
        //Muestro los productos ordenados
        mostrarProductos();
    };

//Esta función toma como perámetros el criterio y el array de productos y lo que hace, usando a función que
//declaré más arriba, es aplicar el método sort, que ordena los elementos de un array
//Y luego ejecuta la función de mostrar productos


    

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + ".json").then(function(resultado){

//Modifiqué la solicitud de carga para que  ahora se pueda acceder a los productos de cualquier categoría
//Concatenando strigns en este fetch que había armado para la entrega 1, le agregué la información catID
//que está almacenada en el local storage y la traje con el getItem
// y después le agregué el .jason como string
        

        if (resultado.status === "ok"){
            arrayProductos = resultado.data.products;
          mostrarProductos();
        }

        document.getElementById("rangeFilterCount").addEventListener('click', function () {

            if (document.getElementById("rangeFilterCountMin").value != "") {
                precioMin = document.getElementById("rangeFilterCountMin").value;
            }else{
                precioMin = undefined;
            }
    
            if (document.getElementById("rangeFilterCountMax").value != "") {
                precioMax = document.getElementById("rangeFilterCountMax").value;
            }else{
                precioMax = undefined;
            }
            mostrarProductos();
        }) 
        
            
            }) ;

//Le agregué a la solicitud de carga una escucha de evento para el botón FILTRO, 
//que recoge el valor de precio minimo y maximo que puso el usuario (las variabes para eso fueron declaradas arriba)
//y ejecuta la función mostrarProductos, definida más arriba


        document.getElementById("clearRangeFilter").addEventListener('click', function () {

        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";         
                
          precioMin = undefined;
          precioMax = undefined;
                        
           mostrarProductos();

        }) ;

//Le agregué una escucha de evento para el botón LIMPIAR que borra los precios que puso el usuario en los casilleros 
//vuelve a poner undefined las variables de precio minimo y maximo y vuelve a ejecutar la funcion de mostrar
//productos, que al estar las variables indefinidas, muestra todos los productos de vuelta
 


document.getElementById("sortAsc").addEventListener("click", function(){
    sortYMostrarProductos(ordenarPorPrecioAsc, arrayProductos);
   
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortYMostrarProductos(ordenarPorPrecioDesc, arrayProductos);
  
});

document.getElementById("sortByCount").addEventListener("click", function(){
    sortYMostrarProductos(ordenarPorRelevanciaDesc, arrayProductos);

 });

//Cada uno de los tres botones que sirven para ordenar, con una escucha de evento, ejecutan la función
//declarada más arriba que ordena y muestra los productos.



})
//};
