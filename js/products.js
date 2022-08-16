document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}
}

function sortAndShowCategories(sortCriteria, categoriesArray){
currentSortCriteria = sortCriteria;

if(categoriesArray != undefined){
    currentCategoriesArray = categoriesArray;
}

currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

//Muestro las categorías ordenadas
showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
getJSONData(CATEGORIES_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        currentCategoriesArray = resultObj.data
        showCategoriesList()
        //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
    }
});