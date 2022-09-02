


let arrayProductos = [];
let precioMin = undefined;
let precioMax = undefined;

//declaré las variables de precio minimo y maximo, y las deje indefinidas, ya que son las que el usuario va a llenar


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
    })});

//Le agregué a la lactura de DOM una escucha de evento para el botón FILTRO, que recoge el valor de precio minimo y maximo que puso el usuario
//y ejecuta la función mostrarProductos, definida más arriba


































//document.addEventListener("DOMContentLoaded", function(e){
   // getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + ".json").then(function(resultado){
     
       // if (resultado.status === "ok"){
           // arrayCantidadDeProductos = resultado.data.products.soldCount;
//
          
        
    //    }
   // })});


//let filtroCantidad = arrayCantidadDeProductos.filter(number => number > minCount && number < maxCount );
   