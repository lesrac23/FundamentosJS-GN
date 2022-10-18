/*var Person = function(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

var john = new Person('John', 1990, 'Developer');
console.log(john);

var john = {
    firstname: "John",
    birthYear: 1990,
    job: "developer"
}

var jane ={
    firstname: "Jane",
    birthYear: 1989,
    job: "Designer"
}*/

//Ejemplos de objetos: Number(), String(); Boolean

//Plantilla
// var Person = function(name, year, job){
//     this.firstname = name;
//     this.birthYear = year;
//     this.job = job;
// };

// //Creacion de los objetos
// var john = new Person("John", 1990, "Developer");
// var jane = new Person("Jane", 1989, "Designer");
// var marie = new Person("Marie", 1982, "Analyst");
// var people = [john, jane, marie];
// console.log(people);
// console.log(john, jane, marie);


// var Vec = function(x, y){
//     this.x = x;
//     this.y = y;
//     this.plus = function(otherVec){
//         return new Vec(this.x + otherVec.x, this.y + otherVec.y);
//     }
//     this.minus = function(otherVec){}
//     this.distance = function(){
//         return Math.sqrt((this.x * this.x) + (this.y * this.y));
//     }
// };


// var vec1 = new Vec(1, 2);
// var vec2 = new Vec(2, 3);

// console.log("Suma de vec1 + vec2 ", vec1.plus(vec2));
// console.log("Suma de vec1 + vec1 ", vec1.plus(vec1));
// console.log("Suma de vec1 + vec1 ", vec2.plus(vec2));
//console.log("Resta de vec1 - vec2: ", vec);


// var Elementos = function(nombre, apellidoPat, apellidoMat, expediente){
//     this.nomElemento = nombre,
//     this.apellidoPatElem = apellidoPat,
//     this.apellidoMatElem = apellidoMat,
//     this.expediente = expediente,
//     this.obtElemento = function(){
//         return this.nomElemento + this.apellidoPatElem + this.apellidoMatElem;
//     }
// }


// var elemento = new Elementos("Lesly ", "Ramos ", "Carranza ", 60905);
// console.log(elemento);
// console.log(elemento.obtElemento());

// var Developer = function(name, birthYear, skills, language){
//     Person.call(this,name, birthYear, "Developer")
//     //Person.call(this,parametros del constructor de Person)
//     this.skills = skills,
//     this.language = language
// }

// var jaime = new Developer(
//     "Jaime",
//     1990,
//     [
//         "Criciral thinking",
//         "Analitic thinking"
//     ], "Python");

//     console.log(jaime);


var Group = function(arr){
    this.members = [],
    this.add = function(value){
        this.members.push(value);
    }

    this.has = function(){

        return this.members.length > 0;
    }
    this.createGroup = function(elementsArray){
        var group = new Group();
        for(var i = 0; i < elementsArray.length; i++){
            group.add(elementsArray[i]);
        }
    
        return group;
    }

}

var myGroup = new Group();
myGroup.createGroup([0,1,3,4,5])


//Reto3 realiza el perimetro
var Triangle = function(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    // this.getPerimeter = function(){
    //     return this.a + this.b + this.c;
    // }
    this.getPerimeter = () => this.a + this.b + this.c;
    console.log(this.getPerimeter());
    this.getArea = () => 
    Math.sqrt((this.a + this.b + this.c)*((this.a + this.b + this.c) - this.a)*((this.a + this.b + this.c) - this.b)*((this.a + this.b + this.c) - this.c));
    console.log(this.getArea());
};
//Es cuando se declara afuera del constructor
// Triangle.prototype.getPerimeter=function(){
//     return this.a + this.b + this.c;
// }

var triangle = new Triangle (12, 16.16, 16.16);

//console.log(triangle);
var perimetro = triangle.getPerimeter();
var area = triangle.getArea();
console.log("PERIMETRO DEL TRIANGULO ", perimetro);
var area = triangle.getArea("AREA DEL TRIANGULO ", );
console.log("AREA ", area);

