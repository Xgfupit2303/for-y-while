let numeroBase =parseInt(prompt("Ingrese la base de la potencia."))
let numeroPotencia = parseInt(prompt("Ingrese la potencia."))
let potencia = 1;
let contador = 0;
while (contador < numeroPotencia) {
  potencia = potencia * numeroBase;
  contador = contador + 1;
}
console.log("La potencia: " + numeroBase + " elevado a la " + numeroPotencia + " es igual a " + potencia);

