let Aviso = alert ("Se  mostrara el ejercicio 8 de la seccion 6.")
let sumaCuadrados= parseInt (prompt("Ingrese hasta que numero se desea sumar los cuadrados"))
    let suma = 0;
    let contador = 1;
    while (contador <= sumaCuadrados) {
      suma += contador*contador;
      contador++;
    }
    console.log(suma);

  