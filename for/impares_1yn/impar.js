let Aviso = alert ("A continuacion se mostrara el ejercicio de los numeros impares hasta el numero que el usuario indique.")
let numeroMaximo= parseInt(prompt("Ingrese hasta que numero desea que se le imprima."))
for (let index = 1; index  <= numeroMaximo; index++){
    if(index % 2 !== 0){
        console.log("impar = " + index);
    }
}