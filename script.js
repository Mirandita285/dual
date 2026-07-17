document.getElementById("btnSaludar").addEventListener("click", function() {
    alert("Hola mundo¡¡¡");
});

document.getElementById("contacto").addEventListener("click", function() {
    alert("Cel: 7225608959, Facebook: Alexys Miranda, ig: mir.axs_");
});

//ejercisios

let nombre = "Alexys";                      //string
let edad = 17;                              //number
const empresa = "JC Desarrollo Web";        //boolean
let promedio = 9.5;                         // float
let estudiante = true;                      // boolean
let dato = null;                            // null

// Realiza,os una operacion

let nacimiento = 2026 - edad;

// Mostramos el lenguaje personalizado
console.log(`Hola ${nombre}, tienes ${edad} años.`);
console.log(`Naciste aproximadamente en ${nacimiento}.`);
console.log(`Bienvenido a ${empresa}`);

// ejercisios aritmeticos

let suma = 50 + 36;
console.log( `El resultado de la suma es ${suma}.`);

let resta = 100 - 89;
console.log(`El resultado de tu resta es: ${resta}.`);

let multiplicacion = 7 * 7;
console.log(`El resultado de tu multiplicacion es: ${multiplicacion}.`);

let operador = 84 / 7;
console.log(`El resultado de tu divicion es: ${operador}.`);

// Operadores de valor

let a = 15;
let b = 20;

console.log(a === b );
console.log(a > b );
console.log(a < b );
console.log(a >= b );
console.log(a <= b );

// Operadores logicos

let usuario = "Alexys";
let contraseña = "20092025";

console.log(usuario === "Alexys" && contraseña === "20092025");

// 2.0
let vejes = 20;
let tieneLicencia = true;

console.log(vejes >= 18 && "Es mayor de edad y tiene licencia ");
