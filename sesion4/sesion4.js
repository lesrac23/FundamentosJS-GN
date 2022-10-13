//var colors = ['Red', 'Blue', 'Green'];
//console.log(colors);
//document.getElementById("demo").innerHTML = colors;
//console.log(colors[0]);//red

//Definicion de arreglos
//var miPrimerArreglo =[];
//var miSegundoArreglo = new Array();
//var miPrimerArreglo =  [1, "Uriel", [0,1,2]];
//console.log(miSegundoArreglo[2][1]);
//console.log(miSegundoArreglo[1][0]);
//Para agregar otro elemento al arreglo
//miSegundoArreglo.push(4);
//console.log(miSegundoArreglo[1][2]);

/*for(i = 0; i < colors.length ; i++){
    console.log(colors[i]);
}*/

/*var obj = {
    //Propiedades
        method1(arg) {
      //código de method1
         },
    //O también: 
        method2: function(arg){
         //código de method2
      }
   };*/

   /*function pushElement(arr, index, val){
        var arregloNuevo = [];
        for(i=0; i < arr.length; i++){
            if(i===index){
                arregloNuevo.push(val);
            }
            return arregloNuevo;

        }
   }

   miPrimerArreglo = pushElement(miPrimerArreglo,1,"Hector");
   console.log(miPrimerArreglo);
   //Borra el ultimo elemento
   miPrimerArreglo.pop*/
    //miPrimerArreglo.splice(1,2);

   /* var pares = [2, 4, 6, 8];

    function regresaDobles(arr){
        var dobles = [];
        for (var index = 0; index < arr.length; index++){
            const element = arr[index];
            dobles.push(element * 2);
        }
       
    }

   
    var dobles = pares.map(function(numero){return numero * 2});
    console.log(dobles);*/

    /*var bandas = ["ACDD", "Queen", "Justin Beiber"]
    var bandasCorregidas = bandas.filter((banda)=>banda != "Justin Beiber");
    console.log(bandas);
    console.log(bandasCorregidas);

    var tarea ={
        nombre: "Levantar cuarto",
        status: false;
    }
    console.log(tarea["nombre"]);
    console.log(tarea.status);
    console.log(tarea.nombre);

    var tareas = [];

    //EXPERT
    var colors = ["Red", "Blue", "Green"];
    console.log("color: "+ colors);
    //Acceder al valor y manipular/actualizar
    colors[0] = "Yellow";
    //Acceder al valor
    console.log("colors[0]", colors[0]);
    console.log("colors[1]", colors[1]);
    console.log("colors[2]", colors[2]);

    //Index no existe, valor definido
    console.log("colors[3]", colors[3]);
    colors.push("Black");
    console.log("colors[3]", colors[3]);
    console.log("hola mundo".length);
    
    //Ejemplo- Multiplicacion de valores de un arreglo
    var myArray = [1, 2, 3, 4, 5, 9];
    function multiplyByTwo(numbersArray){
        var multipledNumbers =[];

        for(var i=0; i< numbersArray.length; i++){
            var result = numbersArray[i] * 2;
            multipledNumbers.push(result);
        }
        return multipledNumbers;
    }

    
    console.log(multiplyByTwo(myArray));*/

    //Calculo de promedio del arreglo de edades
   /* var ages = [23, 45, 31, 16, 29];
    function calculateAverage(agesArray){
        var result=0;

        for(var i=0; i < agesArray.length; i++){
            result = result + agesArray[i];
            console.log(result);
        }
        return (result/agesArray.length);
    }

    console.log(calculateAverage(ages));

    var john ={
        firstName: "John",
        lastName: "Doe",
        birthYear: 1990,
        favoriteColors: [
            "Red",
            "Green",
            "Yellow"
        ]
    };

    console.log("john: ", john);
    console.log(john.lastName);
    console.log(john["lastName"]);*/ 

    //Ejemplo- convertir objeto en arreglo
    //var car ={} objeto vacio
    /*var car = {
        "brand": "Nissan",
        model: "Versa",
        year: 2020
    };

    //[['brand', 'Nissan'], ['model','Versa'],['year',2020]];
    //console.log(Object.keys(car));

    function keyValuesPairs(obj){
        var keys = Object.keys(obj);
        var pairs = [];

        console.log("keys: ", keys);
        console.log("pairs: ", pairs);

        for(var i=0; i < keys.length; i++){
            pairs.push([keys[i], obj[keys[i]]]);
            console.log("pairs: ", pairs);
        }
        return pairs;
    }

    console.log(keyValuesPairs(car));*/

    var johnObject = {
        firstName: "John",
        lastName: "Done",
        birthYear: 1990,
        favoriteColors:[
            "Red",
            "Green",
            "Blue"
        ]
    }

