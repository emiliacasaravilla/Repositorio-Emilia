let productosCarrito = [];


function mostrarProdCarrito(){
    let htmlContentToAppend = "";
 
   
        htmlContentToAppend += `
        <p>${productosCarrito.id}</p>
        <h6>${productosCarrito.articles.name}</h6>
        
      
        `    
document.getElementById("infoProdCarrito").innerHTML = htmlContentToAppend;
}


console.log(productosCarrito);

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + "25801.json").then(function(resultado){

        if (resultado.status === "ok"){
           productosCarrito = resultado.data;
           
            mostrarProdCarrito();
          
        }})})