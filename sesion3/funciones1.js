/*var valor1 = 2;
var valor2 = 3;
var resul;
function suma(num1, num2){
    var resultado = num1 + num2;
    //console.log("El resultado es:" + resultado);
    return (resultado);

}


console.log("El resultado es:" , suma(valor1,valor2));

//Funcion anonima
var resta = function(valor1, valor2){
    return (valor1 - valor2);
}
var res = resta(315,5);
console.log(res);


//Factorial

var factorial = function fac(number){
    return number <2 ? 1 : number * fac(number-1)
}

console.log(factorial(5));

function diHola(){
    alert("HOLA");
}

//eval(alert("La suma de 5 y 7 es igual a " + (5+7)) );

//var confirma = confirm("¿Guardar los datos?");  
if (confirm("¿Guardar los datos?")) {
    alert("Elegiste guardar");
}else{
    alert("cancelaste el guardado");
}



var multiplicacion=(x,y)=> x*y
console.log(multiplicacion(3,2));

function calculadora(x, y, op){

    switch(op){
        case 'suma':
            return x + y;
            break;
        case 'resta':
            return x - y;
            break;
        case 'multiplicación':
            return x * y;
            break;
        case 'división':
            return x / y;
            //break;
        default:
            console.log("no tenemos esa operación");
            break;
    }
}

console.log(calculadora(43,12, 'multiplicación'));

function calculadora(x, y, operador){
    return operador(x, y)
}

//console.log(calculadora(43,12,function(x, y){return x+y}));
function suma(x,y){
    return x+y;
}

console.log(calculadora(43,12, (x,y)=>x+y));
*/
/*function saludoPersonalizado(nombre,saludo){
   return saludo(nombre);
}

function saludo(nombre){
    return("Hola buenas tardes" + nombre);
}

console.log(saludoPersonalizado('lesly',saludo));*/



function saludoPersonalizado(nombre,saludo){
    saludo(nombre);
 } 

console.log(saludoPersonalizado('lesly',function(nombre){console.log("Hola buenos dias " + nombre)}));

function multRecursiva(x,y){
    return multRecursivaAuxiliar(x,y,0);
}

function multRecursivaAuxiliar(x, y, resultado){
    console.log(x, y, resultado);
    if(y==0){
        return resultado;
    }
    return multRecursivaAuxiliar(x, y-1, resultado + x);
}

console.log(multRecursiva(4,3));