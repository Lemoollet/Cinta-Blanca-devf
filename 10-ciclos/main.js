//for ( inicio ;  final; incremento ;  incremento ) {}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
//-------------------------------------------------------
for (let i = 200; i >= -300; i = i - 3) {
  console.log(i);
}
//-------------------------------------------------------
for (let i = -500; i <= 2000; i = i + 10) {
  console.log(i);
}
//-------------------------------------------------------
for (let i = 0; i <= 100; i = i + 1) {
  if (i % 2 === 0) {
    console.log(i + " Es par");
  } else {
    console.log(i + " Es impar");
  }
}
//-------------------------------------------------------
let array = ["a", "s", "r", "w", "p", "r", "s"];

//i++  <-- solo sirve para 1
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//-------------------------------------------------------
let nombre = prompt("nombre");
let array = ["s", "q", "2", "l"];

for (let i = 0; i < nombre.length; i++) {
  nombre[i] = "a";
  array[i] = "a";
}

console.log(nombre);
console.log(array);
//-------------------------------------------------------
const palabra = prompt("escribe lo que quieras");
let nuevaPalabra = "";
let letra = "";

for (let i = 0; i < palabra.length; i++) {
  if (i % 2 === 0) {
    letra = palabra[i].toUpperCase();
  } else {
    letra = palabra[i].toLowerCase();
  }
  nuevaPalabra += letra;
}
console.log(nuevaPalabra);
//-------------------------------------------------------
// challenge mayuscula y minuscula
const palabra = prompt(" Ingresa una palabra ");
let resultado = "";

for (let i = 0; i < palabra.length; i++) {
  if (i % 2 === 0) {
    resultado += palabra[i].toUpperCase();
    // es lo mismo si ponemos   resultado.push(palabr[i].toUperCase())
  } else {
    resultado += palabra[i].toUpperCase();
  }
}

console.log(resultado);
//-------------------------------------------------------
const array = [2, 3, 62, 5, 23, 5];
array.push(13);
console.log(array);
