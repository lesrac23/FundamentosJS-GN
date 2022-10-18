//var body = document.body.childNodes;
/*var elementById = document.body.getElementsById("a");//hijos directos e indirectos en todo el body
var link = document.body.getElementsByTagName("a")[0];
var elementByClass = document.body.getElementsByClassName("main");
//var body = document.getElementById("main");

console.log(body);*/
var paragraphs = document.body.getElementsByTagName("");
console.log("Primer nodo", paragraphs[0]);
console.log("Segundo nod
o", paragraphs[1]);

document.body.insertBefore(paragraphs[1], paragraphs[0]);

/*var elementById = document.getElementById("myElement");
var link = document.body.getElementsByTagName("a")[0]; // Encontrar elementos por nombre de etiqueta
var elementByClass = document.body.getElementsByClassName("main"); // Encontrar elementos por nombre de class

// console.log(elementById);
// console.log(link);
// console.log(elementByClass);

// Ejemplo de manipulación de DOM

var paragraphs = document.body.getElementsByTagName("p");

//console.log("Colección de nodos ", paragraphs);

//console.log("Primer nodo: ", paragraphs[0]);
//console.log("Segundo nodo: ", paragraphs[1]);

document.body.insertBefore(paragraphs[1], paragraphs[0]);*/

// Ejemplo de creación de nodos
/*var h2 = document.createElement("h2");
//console.log(h2)
var text = document.createTextNode("Hellow world from code!!");
console.log(text);
//agrega nodos:
h2.appendChild(text);
document.body.appendChild(h2);
console.log(h2.childNodes);

//Ejemplo de atributos
var link = document.getElementById("link");
console.log(link);
link.href = "http://google.com";
console.log(link);

link.className = "highlight";
link.style.backgroundColor = "black";
//console.log("link: ", link);

//Ejemplo innerHTML
var elementDiv = document.createElement("div");
elementDiv.innerHTML = `<p> Texto por aqui</p>`;

document.body.appendChild(elementDiv);*/

/*regresa un objeto similar a un arreglo con todos los elementos descendientes 
que contengan la etiqueta proporcionada como argumento. 
La búsqueda se da en todo el documento desde el nodo raíz.*/
// var images = document.getElementsByTagName("img");
// console.log(images);
// for(var i = 0; i < images.length; i++){
//     images[i].alt = `Mi texto ${i + 1}`;
//     //console.log(images[i].alt);
// }