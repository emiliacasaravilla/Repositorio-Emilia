//TODO ESTE JS ES DE LA ENTREGA 3 (por ahora)

let arrayProducto = [];

//declaré una variable donde alamcenar la info de cada producto, que voy a traer del json


function mostrarInfoProducto(){

//creé la función que más adelante voy a llamar, que se encarag de mostrar la info del prodcuto
//escribo html para subir ese contendio en un contenedor que ya creé en product-info.html, con el id infoProducto
//referencio todos los datos, extraídos del json, que ahora está en el arrayProducto
//(las imágenes están guardadas como un array todas juntas, por eso las referencio con un número, por orden)
//por ahora, no logré ponerlas una al lado de otra, me quedaron una abajo de la otra)

    let htmlContentToAppend = "";
 
   
        htmlContentToAppend += `
        <h2>${arrayProducto.name}</h2>
        <br>
        <hr>
        <p>Precio</p>
        <p id="precio">${arrayProducto.currency} ${arrayProducto.cost}</p>
        <p>Descripción</p>
        <p id="descricpcion">${arrayProducto.description}</p>
        <p>Categoría</p>
        <p id="categoria">${arrayProducto.category}</p>
        <p>Cantidad de vendido</p>
        <p id="cantidadDeVendidos">${arrayProducto.soldCount}</p>
        <p>Imágenes ilustrativas</p>
        <div class="col-3">
                <img src="${arrayProducto.images[0]}" class="img-thumbnail">
                <img src="${arrayProducto.images[1]}" class="img-thumbnail">
                <img src="${arrayProducto.images[2]}" class="img-thumbnail">
                <img src="${arrayProducto.images[3]}" class="img-thumbnail">
                </div>
      
        `    
document.getElementById("infoProducto").innerHTML = htmlContentToAppend;
}


    
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL + localStorage.getItem('id') + ".json").then(function(resultado){
  
    
            if (resultado.status === "ok"){
                arrayProducto = resultado.data;
                mostrarInfoProducto();
            }})})

//Hice una solicitud de carga con el url de product info que estaba en init
//concatenando con el id del producto que estaba guardado en el local storage más el .json
//así consigo que, dependiendo de qué producto haya seleciconado el usuario, arrayProducto se llena de su info
//luego, ejecuto la función que muestra la info, definida anteriormente



//Para mostrar los comentarios hice algo muy parecido a lo de arriba. 
//La principal diferencia fue que tuve que recorrer el array de comentarios con un for
//para poder mostrarlos todos 

//Para las estrellas cree una función más abajo y fue la que usé dentro de la funcion mostrar comentarios

let arrayComentarios = [];

function mostrarComentarios() {
    let htmlContentToAppend = "";
 
    for (let comentario of arrayComentarios){
       
        htmlContentToAppend += `
     
        <p>${comentario.user} - ${comentario.dateTime} - ${estrellas(comentario)}

        <p>${comentario.description}

        ` 
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}};



//Para la función que muestra la cantidad de estrellas en función del score, lo que hice fue hacer 
//un condicional, que dependiendo de si el puntaje era 1, 2, 3, 4 o 5 mostraba esa cantidad de esterellas
//capaz hay alguna forma más sencillo de hacerlo, pero esta funciona. En cada número, que seteo chequed a 
//la cantidad de estrellas correspindientes, y después cuando llamo a la función le paso como parámetro
//la info del socre del jason de comentarios (que en realidad ya me la traje acá y esta en el arrayComentarios)

function estrellas(infoComentarios){

let puntaje = infoComentarios.score;

if (puntaje==1){
    return(
    `
    <span class="fa fa-star checked" ></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    `)    
} else if (puntaje==2){
    return(
    `
    <span class="fa fa-star checked" ></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    `)  
} else if (puntaje==3){
    return(
    `
    <span class="fa fa-star checked" ></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    `) 
} else if (puntaje==4){
    return(
    `
    <span class="fa fa-star checked" ></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    `) 
} else if (puntaje==5){
    return(
    `
    <span class="fa fa-star checked" ></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    `) 

}};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem('id') + ".json").then(function(resultado){


        if (resultado.status === "ok"){
            arrayComentarios = resultado.data;
            mostrarComentarios();
        }})});