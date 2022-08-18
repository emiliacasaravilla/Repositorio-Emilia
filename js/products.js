
function showProductList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.productCount) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.imgSrc}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name}</h4>
                            <small class="text-muted">${products.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${products.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }};


let productos = [];

document.addEventListener("DOMContentLoaded", function(){
getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function(resultado){
    if (resultado.status === "ok"){
        productos = resultado.data.products
    } else {
        alert ('Ha ocurrido un error al cargar los productos.');
    }

})});