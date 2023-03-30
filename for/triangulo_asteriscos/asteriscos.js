let Aviso = alert ("Se mostrara el ejercicio del triangulo de asteriscos.")
let numero = parseInt(prompt("Ingrese el tamaño de inicio:"));
let numero2 = parseInt(prompt("Ingrese el tamaño máximo:"));
let asterisco = "*";
let acumuladora = "";
for (let index = numero; index <= numero2; index++) {
  acumuladora = acumuladora + asterisco;
  console.log(acumuladora);
}

let asterisco2 = "*";
let acumuladora2 = "";
for (let index = numero2 - 1; index >= numero; index--) {
  acumuladora2 = "";
  for (let n = 1; n <= index; n++) {
    acumuladora2 = acumuladora2 + asterisco2;
  }
  console.log(acumuladora2);
}

