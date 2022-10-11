var time = 12;
var greeting;//undefine

if(time < 12){
    greeting ="Buenos dias";
}else if(time > 12){
    greeting = "Buenas tardes";
}else if(time >= 20 && time >24){
    greeting = "Buenas noches";
}else{
    greeting = "No corresponde a ninguna hora";
}

console.log(greeting);

//Ejemplo control de flujo
var day = 2;
var text;
switch(day){
    case 0:
        text = "Domingo";
        break;
    case 1:
        text = "Lunes";
        break;
    case 2:
        text = "Martes";
        break;
    case 3:
        text = "Miercoles";
    break;
    case 4:
        text = "Jueves";
        break;
    case 5:
        text = "Viernes";
    break;
    case 6:
        text = "Sabado";
    break;
    default:
        text = "El día no existe";
        break;
}
console.log(text);

//operador ternario

var speed = 20;
var message;

if(speed > 100){
    message = "Vas muy rápido";
}else{
    message = "Estas debajo del limite";
}
//Condicion cuaternario es lo mismo que el de arriba
//var message = speed > 100 ? "Vas muy rápido" : "Estas debajo del limite";
console.log(message);


var speed1 = 150;
var message1 = speed1 > 120 ? "Vas volando" : ( speed1 > 100 && speed1 <= 120 ? "Vas muy rápido": "Estas debajo del limite");

if(speed1 > 120){
    message1 = "Vas volando";
}else if(speed1 > 100 && speed1 <= 120){
    message1 ="Vas muy rápido";
}else{
    message1 = "Estas debajo del limite";
}

console.log(message1);