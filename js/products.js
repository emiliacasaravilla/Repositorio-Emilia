
function mostrarProductos(){

    let htmlContentToAppend = "";
    for(let i = 0; i < arrayProductos.length; i++){
        let productos = arrayProductos[i];


            htmlContentToAppend += `
            <div onclick="setCatID(${productos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productos.image}" alt="${productos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productos.name}</h4>
                            <small class="text-muted">${productos.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${productos.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("listaProductos").innerHTML = htmlContentToAppend;
    }; 


let arrayProductos = [];

document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCTS_URL).then(function(resultado){
    if (resultado.status === "ok"){
        arrayProductos = resultado.data.products;
      mostrarProductos();
    
    }
})});

