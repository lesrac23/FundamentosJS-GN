var numbers = [1, 2, 3, 4, 5];
var doubles = [];
//Programacion imperativa
for(var i = 0; i < numbers.length; i++){
    doubles.push(numbers[i] * 2);

}

//Programacion declarativa- funcion
var doublesF = numbers.map(function(number){
    return number *2;
})
console.log(numbers);
console.log(doubles);
console.log(doublesF);

//Ejemplo Inmutabilidad
var car ={
    brand: "Nissan",
    model: "Sentra",
    year: 2020
}

function addColor(car){
    car.color = "Black";

    return car;
}

console.log("Objeto car antes de llamar a addColor", car);
var sameCar = addColor(car);
console.log("Objeto car despues de llamar a addColorr", car);
console.log("Objeto sameCar", sameCar);

console.log("Same car?", car===sameCar);

//Ejemplo Inmutabilidad
function addColorI(car){
    var newCar = Object.assign({}, car, {
        color: "Black"
    })
    //Es identico a la declaracion de arriba
    var newCarAlternative = {
        ...car,
        color:"Black"
    }
    //return newCar;
    return newCarAlternative;
}

console.log("Objeto car antes de llamar a addColorI", car);
var sameCarI = addColorI(car);
console.log("Objeto car despues de llamar a addColorI", car);
console.log("Same car?", car === sameCar);

//Caracteristicas de una funcion PURA
/*
1. El valor retornado siempre es el mismo valor de entrada
2.- No debe producir side effects (efetos secundarios)
 */

//Funcion NO PURA
function randomNumber(value){
    return Math.floor(Math.random() * 10) * value;
}

//Funcion PURA
function doubleNumber(value){
    return value * 2;
}

console.log("randomNumber", randomNumber(2));//
console.log("doubleNumber", doubleNumber(2));//

var cart =[
    {
        item: "Laptop",
        quantity: 1
    }
];

//Ejemplo funcion no pura
function addItemToCart(item, quantity){
    cart.push({
        item = item,
        quantity: quantity
    })
}

//Ejemplo funcion pura manipulamos la variable
function addItemToCart(cart, item, quantity){
    var newCart = cart.map(function(element){
        return element;
    })

    newCart.push({
        item:item,
        quantity: quantity
    })

    return newCart;
}


//Funcion de primera clase
var square = function(number){
    return number * number;
}

var squareOfFour = square(4);
console.log(squareOfFour);

//Funcion de alto orden

//Input: 12345-> 1 + 2 + 3 + 4 + 5 = 15

var number = 12345;
var string = number.toString(); //String(number) "12345"

var array = string.split(""); //["1", "2", "3", "4", "5"]
console.log(number);
console.log(string);
console.log(array);

/*var arrayOfNumber = array.map(function(number){//para convertir el array a numero
    return Number(number);
});*/

var arrayOfNumber = array.map(number);//Es igual que el de arriba
console.log("array: ", array);
console.log("arrayOfNumber: ", arrayOfNumber);

var sum = arrayOfNumber.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;

}, 0);

//programacion funcional, es lo mismo que lo de arriba
var sumF = number 
    .toString()
    .split("")
    .reduce(function(acumulador, currentValue){
        return acumulador + Number(currentValue)
    }, 0);
    
console.log("sum", sum);
console.log("sumF ", sumF);

//
/*function flatten(arrays) {
    reduce (function(){},)
  }*/
  var concatflatten = arrays.reduce(
    (previousValue, currentValue) => previousValue . currentValue,
    initialValue
  );
  
  console.log(sumWithInitial);
  
  var arrays = [[1, 2, 3], [4, 5], [6]];
  var array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]

