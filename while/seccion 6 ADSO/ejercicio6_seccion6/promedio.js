let Aviso= alert ("Se mostrara el ejercicio 6 de la seccion 6. ")
let Promedio = parseInt
    let contador = 0;
    let acumuladora = 1;
    while (acumuladora <= 10) {
      let numero = parseInt(prompt("Ingrese el número " + acumuladora));
      contador += numero;
      acumuladora++;
    }
    let promedio = contador / 10;
    console.log(promedio);
  