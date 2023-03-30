let Aviso = alert ("Se mostrara el ejercicio 7 de la seccion 6.")
let maximoNumeros = parseInt(prompt("Ingrese el número máximo de números a ingresar:"));
let contador = 0;
let acumuladora = 1;
while (acumuladora <= maximoNumeros) { 
    let numero = parseInt(prompt("Ingrese el número " + acumuladora + " (o ingrese 0 para terminar)"));   
  if (numero === 0) {
    break;
  }
  contador += numero;
  acumuladora++;
}
let promedio = contador / (acumuladora - 1);
console.log("El promedio de los" + acumuladora - 1 + " números ingresados es: " + promedio);
