let arrayProductos = [];


function mostrarInfoProducto(){


    let htmlContentToAppend = "";
 

   
        htmlContentToAppend += `
        <h2>${products.name}Holiiii</h2>
        <p>Precio</p>
        <p>Precio</p>
        <p id="precio"></p>
        <p>Descripción</p>
        <p id="descricpcion"></p>
        <p>Categoría</p>
        <p id="categoria"></p>
        <p>Cantidad de vendido</p>
        <p id="cantidadDeVendido"></p>
        <p>Imágenes ilustrativas</p>
      
        `
    }



document.getElementById("listaProductos").innerHTML = htmlContentToAppend;
     

    
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + ".json").then(function(resultado){
  
    
            if (resultado.status === "ok"){
                arrayProductos = resultado.data.products;
                mostrarInfoProducto();
            }})})
