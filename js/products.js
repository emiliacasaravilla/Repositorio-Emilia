
let arrayProductos = [];
let precioMin = undefined;
let precioMax = undefined;
//declaré las variables de precio minimo y maximo, y las deje indefinidas, ya que son las que el usuario va a llenar



//const ordenarPorPrecioDesc = "ZA";
//const ordenarPorPrecioAsc = "AZ";
//const ordenarPorRelevanciaDesc = "Cant.";

//var arr = [ 40, 1, 5, 200 ];
//function comparar ( a, b ){ return a - b; }
//arr.sort( comparar );  // [ 1, 5, 40, 200 ]


//numeros.sort(function(a, b){return a - b});



//function criterioPrecioDesc ( a, b ){ 
 //   return b - a 
//};

//function criterioPrecioAsc ( a, b ){ 
   // return a - b 
//};

//function ordenarPorPrecioDesc (arrayProductos){
//arrayProductos.sort(criterioPrecioDesc ( a , b )); 
//};

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ordenarPorPrecioAsc )
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ordenarPorPrecioDesc){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ordenarPorRelevanciaDesc){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bsoldCount ){ return -1; }
            if ( aCount < bsoldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}




function mostrarProductos(arrayProductos){


    let htmlContentToAppend = "";
 
//A la función que muestra los productos, creada para la entrega 1, le agregué las funcionalidades para que recorra con un FOR
//el array de productos que ya tenía y con un condicional que vaya chequeando las diferentes opciones: 
// 1) si los precios no están definidos
// 2) si los rangos de max y min están definidos
// 3 y 4) o si uno está definido y el otro no
// En cualquiera de los casos la función muestra productos, pero solo muestra los que entren en el rango (cuando sea llamada, más abajo)

   for (let productos of arrayProductos){

    if ((precioMin== undefined && precioMax == undefined) || (parseInt(productos.cost)>=precioMin && parseInt(productos.cost)<=precioMax) || (parseInt(productos.cost) >= precioMin && precioMax==undefined) || (parseInt(productos.cost) <= precioMax && precioMin== undefined)){

    
            htmlContentToAppend += `
            <div onclick="setCatID(${productos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productos.image}" alt="${productos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productos.name} - ${productos.currency} ${productos.cost} </h4>
                            <small class="text-muted">${productos.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${productos.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("listaProductos").innerHTML = htmlContentToAppend;
     

    }};



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + ".json").then(function(resultado){
 
//Concatenando strigns en este fetch que había armado para la entrega 1, le agregué la información 
//Para que cargue los productos de acuerdo a la categoria que elija el usuario
//Partiendo el url base que estaba seteando en init, le concatené mediante get al local storage 
//El catID  y después le agregué el .jason como string
        

        if (resultado.status === "ok"){
            arrayProductos = resultado.data.products;
          mostrarProductos(arrayProductos);
        }

        document.getElementById("rangeFilterCount").addEventListener('click', function () {
            precioMin = document.getElementById("rangeFilterCountMin").value;
            precioMax = document.getElementById("rangeFilterCountMax").value;
            mostrarProductos(arrayProductos);           
            }) 

//Le agregué a la lactura del DOM una escucha de evento para el botón FILTRO, que recoge el valor de precio minimo y maximo que puso el usuario
//y ejecuta la función mostrarProductos, definida más arriba


        document.getElementById("clearRangeFilter").addEventListener('click', function () {

            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";         
                
           precioMin = undefined;
           precioMax = undefined;
        
           mostrarProductos(arrayProductos);

//Le agregué una escucha de evento para el botón LIMPIAR que borra los precios que puso el usuario en los casilleros 
//vuelve a poner undefined las variables de precio minimo y maximo y vuelve a ejecutar la funcion de mostrar
//productos, que al estar las variables indefinidas, muestra todos los productos de vuelta
                

document.getElementById("sortAsc").addEventListener("click", function(){
    sortAndShowCategories(ordenarPorPrecioAsc);
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortAndShowCategories(ordenarPorPrecioDesc);
});

document.getElementById("sortByCount").addEventListener("click", function(){
    sortAndShowCategories(ordenarPorRelevanciaDesc);
});



    //document.getElementById("sortDesc").addEventListener('click', function () {

       // ordenarPorPrecioDesc (arrayProductos);
       // mostrarProductos(arrayProductos);
//alert('jol');

         //   });
 
                })        


    })});



































//document.addEventListener("DOMContentLoaded", function(e){
   // getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + ".json").then(function(resultado){
     
       // if (resultado.status === "ok"){
           // arrayCantidadDeProductos = resultado.data.products.soldCount;
//
          
        
    //    }
   // })});


//let filtroCantidad = arrayCantidadDeProductos.filter(number => number > minCount && number < maxCount );
   