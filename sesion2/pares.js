
//Numero par
/*var result;
for(var i = 1; i <= 100; i++){
    result = i % 2;
    if(result === 0){
        console.log("Soy par",i);
    }
}*/


//Numero primo 1 y el mismo del 0 al 100

for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }

