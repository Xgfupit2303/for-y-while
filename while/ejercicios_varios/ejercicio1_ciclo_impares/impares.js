let contador = 0;
let cantidadImpares = 0;
while (contador <=100){
 if(contador %2 !== 0){
    console.log("Es impar:", contador)
    cantidadImpares++;
}
    contador = contador + 1
}
console.log("Hay " + cantidadImpares + " numeros impares entre el 0 y el 100");


