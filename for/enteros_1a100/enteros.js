let Aviso = alert ("Se mostrara el ejercicio de los numeros enteros de 1 a 100 ascendente y descendente");
let numero = 1
let numero2 = 100
let contador = 1;
let acumuladora = 0;
for (let index = numero; index <= numero2; index++) {
  acumuladora = acumuladora + contador;
  console.log(acumuladora);
}

let contador2= 99;
let acumuladora2 = 100;
for (let index = numero2 ; index >= numero; index--) {
    console.log(index);
   
}