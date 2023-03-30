let Aviso= alert ("A continuacion se mostrara el ejercicio de la suma de los n primeros numeros.")
let num = parseInt(prompt("Ingrese un número"));
let acumulador =0;

for (let index = 0; index <= num; index++) {
    acumulador = acumulador + index;
}
console.log("La suma de los primeros "+num+" números es: "+acumulador);