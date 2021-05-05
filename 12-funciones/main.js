//ECMA 5
var letra = "u";

function suma(a, b) {
  console.log(a + b);
}

suma(10, 10);
suma(5, 5);
suma(1, 2);

// ECMA 6
let numero = 10;
const precio = 30;

const suma = (a, b) => {
  let resultado = a + b;
  return resultado;
};

let res = suma(suma(10, 10), 10);

console.log(res);
