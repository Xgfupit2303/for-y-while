let contador = 0;
let cantidadMultiplos= 0;
while (contador <=100){
 if(contador %6 == 0){
    console.log("Es multiplo de 6:", contador)
    cantidadMultiplos++;
}
    contador = contador + 1
}
console.log("Hay "+ cantidadMultiplos + " multiplos del 6 entre el 0 y el 100");
