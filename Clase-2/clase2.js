// ------------ 2. Ciclos/iteraciones & Programacion avanzada con funciones

let numMult = prompt ('Vamos a generar la tabla del "X"');

for (let i = 1; i <= 10; i++) {

    let resultado = numMult * i;

    if ( numMult == "") {

      alert("No ingresaste datos!");
      numMult = prompt("Intenta nuevamente, ingresa un numero");

    }  else alert(numMult + " x " +  i  + " = " + resultado) ;
        console.log(numMult + " x " +  i  + " = " + resultado) ;

} alert("Gracias!");


// Pedir número mediante prompt y sumarle otro número en cada repetición
// realizando una salida por cada resultado

let endProg = "ESC";

alert ("Ingrese dos numeros que desea sumar");

do { 

  let numSumA = parseInt(prompt("Ingrese un numero"));
  let numSumB = parseInt(prompt("Ingrese otro numero"));

  result = numSumA + numSumB;

  console.log("Sumar " + numSumA + " + " + numSumB + " Resultado: " + result);

  alert("Sumar " + numSumA + " + " + numSumB + " Resultado: " + result);

  document.write ("Sumar " + numSumA + " + " + numSumB + " Resultado: " + result);

  endProg = prompt("Desea finalizar el programa? Ingresar ESC");
  
} while ( endProg !== "ESC" );

console.log("Fin del programa");


// Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
// realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let name1 = prompt("Ingresa tu Nombre");
let apellido1 = prompt("Ingresa tu Apellido");

while ( name1 != "ESC" ) {
  
  console.log("Nombre Completo: " + name1 + " " + apellido1);
  alert ("Nombre Completo: " + name1 + " " + apellido1);

  name1 = prompt("Ingresa otro nombre O escribe ESC para finalizar");
  apellido1 = prompt("Ingresa otro Apellido");
  
} 
console.log("Ingresaste 'ESC' Fin del programa");


// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
// --------------- PRIMER METODO ----------------------

let numb = parseInt(prompt("Ingresa un numero para repetir el saludo"));
let text = "Hola buenos dias! ";

for ( i = 0; i < numb; i++) {

  console.log(text);
  alert(text); 

}

// ----------------SEGUNDO METODO ---------------------

let numb = parseInt(prompt("Ingresa un numero para repetir el saludo"));
let text = "Hola buenos dias! ";

eval("console.log(text);".repeat(numb)); //Se repite la cantidad de veces ingresadas.


// --------------- TERCER METODO ---------------------
let numb = parseInt(prompt("Ingresa un numero para repetir el saludo"));
let text = "Hola buenos dias! ";

  saludo = text.repeat(numb); //Se repite la cantidad de veces ingresada en la variable numb

console.log(saludo);
alert("Te vamos a saludar " + numb + " veces");
alert(saludo);
