
let productosCarrito = [];

/*ENTREGA 5
Creé la variable donde voy a guardar la info del producto que está en el json
*/


 

/*ENTREGA 5

ESTO TOAVÍA NO ESTÁ RESULTO BUUUUUU


*/

function ajustarSubtotal(){
  let cantidad = cantidad.value;
  let subTotal= productosCarrito.articles[0].unitCost * cantidad;
  return subTotal
}

function mostrarProdCarrito(){
    let htmlContentToAppend = "";

   
        htmlContentToAppend += `
          
        <div class="container">
    <div class="row">
      <div class="col-2">
      <img src="${productosCarrito.articles[0].image}" class="img-thumbnail">
      </div>
      <div class="col-2">
      ${productosCarrito.articles[0].name} 
      </div>
      <div class="col-2">
      ${productosCarrito.articles[0].currency} ${productosCarrito.articles[0].unitCost}
      </div>
      <div class="col-2">
        <input type='number' oninput="ajustarSubtotal()" min="1" id='cantidad' value='${productosCarrito.articles[0].count}' class='input-carro'></input>
      </div>
      <div class="col-4">
      ${productosCarrito.articles[0].currency}  ${productosCarrito.articles[0].unitCost};
      
      
      </div>
    </div>
  </div>  
        `    
document.getElementById("infoProdCarrito").innerHTML = htmlContentToAppend;
};


/*ENTREGA 5
Creé la función que muestra info del producto.
-Como curiosidad: para acceder a la info del producto, a pesar de que fuera solo 1, tuve que indexarlo [0] 
porque el el producto está guardado dentro de articles como un objeto dentro de un array de objetos 
(a pesar de que haya uno solo)
-Para poner la cantidad de porductos creé un input con el value, por defecto, que tiene el json (1)
-ACA TODAVÍA NO RESOLVÍ LO DE LA MULTIPLICACIÓN, PORQUE NO PUEDO ACCEDER AL VALUE!

 ${document.getElementById('cantidad.value')

*/


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + "25801.json").then(function(resultado){

        if (resultado.status === "ok"){
           productosCarrito = resultado.data;

            mostrarProdCarrito();
            
           }})})

/*ENTREGA 5
Hice una solicitud de carga con el url de CART INFO que estaba en init y lo concatené con el id 
del usuario birndado en la premisa (y agregar el .json)
Después de guardar la info en la variable previamente definida productosCarrito
llamé a la función de mostrarProdCarrito
*/