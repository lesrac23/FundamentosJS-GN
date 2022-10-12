/*function calculateAge(birthYear){
    var age = 2022 - birthYear;
    //return 2022 - birthYear;
    return (age);

}

const result = calculateAge(1996);
var ageX = calculateAge(1982);
var ageY = calculateAge(1972);
console.log(result, ageX, ageY);


function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + " retires in " + retirement + " years.");
    console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1996, 'Hector');

function power(base, exponent){
    var result = 0;
    
    if(exponent === 0){
        result = 1;
        //console.log(result);
    }if(exponent === 1){
        result = base;
        //console.log(result);
    }else{
        for (i = 0; i<=exponent ; i++){
            result = result * base;
        }
        //console.log(result);
    }

    return (result);
    
}

console.log(power(2,0));

console.log("3 ^ 3 =", power(2,0));

function name(params){

}
//funcion anonima
var square = function(num){
    return num * num;
}

console.log(square(4));

//Funcion recursiva
var factorial = function fac(number){
    return number < 2 ? 1 : number * fac(number -1);
}

console.log(factorial(5));

var myProfile = function(job, name){
    switch(job){
        case "developer":
            return `${name} desgins awesome websites.`
            break;
        case "designer":
            return `${name} designs awesome websites.`
            break;
        default:
            return `${name} does something else.`
            break; 
    }
} 


function myProfileCommon(job, name){
    switch(job){
        case "developer":
            return `${name} desgins awesome websites.`
            break;
        case "designer":
            return `${name} designs awesome websites.`
            break;
        default:
            return `${name} does something else.`
            break; 
    }

}

console.log(myProfile("developer", "Marvin"));
console.log(myProfileCommon("designer","Lesly"));
console.log(myProfileCommon("driver","José"));

//Una unica vez llamada
function logName(){
    var name = "John Doe";
    console.log(name);
}

logName();

//Funcion anonima
(function(){
    var name = "John Doe";
    console.log(name);
})();


(function(name){
    console.log(name);
})("John Doe");*/


function fivo(iteracion){

    if(iteracion < 1){
        console.log("La iteración debe ser mayor que 0");
    }else{
        for(i=0; i<=iteracion; i++){
            if(iteracion <= 1){
                return 1;
            }else{
                iteracion = fivo(iteracion-2) + fivo;
            }
            
        }
    }

}

var resultado = fivo(-5);
console.log(resultado);