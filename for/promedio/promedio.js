let Aviso= alert ("A continuacion se mostrara el ejercicio del promedio")
let num =0;
let acumulador =0;
let promedio =0;

for (let index = 0; index <= 10; index++) {
    num = parseInt(prompt("Ingrese un número"));
    acumulador = acumulador + num;
    promedio = acumulador / num;
}
console.log("El promedio de los 10 números es "+promedio);