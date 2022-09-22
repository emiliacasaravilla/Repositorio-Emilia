
let producto = undefined;


//declaré una variable donde alamcenar la info de cada producto, que voy a traer del json


function mostrarInfoProducto(){

//creé la función que más adelante voy a llamar, que se encarga de mostrar la info del prodcuto
//escribo html para subir ese contendio en un contenedor que ya creé en product-info.html, con el id infoProducto
//referencio todos los datos, extraídos del json, que ahora está en la variable producto
//(las imágenes están guardadas como un array todas juntas, por eso las referencio con un número, por orden)
//(por ahora, no logré ponerlas una al lado de otra, me quedaron una abajo de la otra)

    let htmlContentToAppend = "";
 
   
        htmlContentToAppend += `
        <h2>${producto.name}</h2>
        <br>
        <hr>
        <p>Precio</p>
        <p id="precio">${producto.currency} ${producto.cost}</p>
        <p>Descripción</p>
        <p id="descricpcion">${producto.description}</p>
        <p>Categoría</p>
        <p id="categoria">${producto.category}</p>
        <p>Cantidad de vendido</p>
        <p id="cantidadDeVendidos">${producto.soldCount}</p>
        <p>Imágenes ilustrativas</p>
        <div class="col-3">
                <img src="${producto.images[0]}" class="img-thumbnail">
                <img src="${producto.images[1]}" class="img-thumbnail">
                <img src="${producto.images[2]}" class="img-thumbnail">
                <img src="${producto.images[3]}" class="img-thumbnail">
                </div>
      
        `    
document.getElementById("infoProducto").innerHTML = htmlContentToAppend;
}

//ACÁ EMPIEZA ENTREGA 4:
//creé una variable para que luego alamcene los productos relainados
//armé una función de redireccionamiento que guarde el id del producto que el usuario seleccione
//armé una función que muestra los prod relacionados, usando un for para recorrer el array de prod relacionados
//(por si en otros casos son más de 2 productos que quiere mostrar)
//esa función tiene el onclick que lo que hace es llamar a la función redireccionar con el id guardado
//en el local storage como parámetro
//la función muestra foto chiquita y nombre de los productos


let productosRelacionados = undefined;

function redireccionar (id){
    localStorage.setItem("id", id)
    window.location = "product-info.html";
}

function mostrarRelacionados(){

     let htmlContentToAppend = "";
 
     for(prodRel of productosRelacionados){
        

        htmlContentToAppend += `
        <div onclick="redireccionar(${prodRel.id})">
        <div class="col-3">
         <img src="${prodRel.image}" class="img-thumbnail">
         </div>
        <p>${prodRel.name}</p>
        </div>

        `    
        document.getElementById("relacionados").innerHTML = htmlContentToAppend;
        }};
        





    
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL + localStorage.getItem('id') + ".json").then(function(resultado){
  
    
            if (resultado.status === "ok"){
               producto = resultado.data;
               productosRelacionados =producto.relatedProducts;

                mostrarInfoProducto();
                mostrarRelacionados();
            }})})

//Hice una solicitud de carga con el url de product info que estaba en init
//concatenando con el id del producto que estaba guardado en el local storage más el .json
//así consigo que, dependiendo de qué prod haya seleciconado el usuario, la variable producto se llena de su info
//luego, ejecuto la función que muestra la info, definida anteriormente


//ENTREGA 4:
//agregué a esta solicitud de carga dos cosas:
//le agregué contenido a la variable vacía que ahora tiene la info de los prod relacionados
//llamé a la función de mostrar los productos relacionados




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


//aca hago la solicitud de carga con el url de los comentarios, y ejecuto la funcion 