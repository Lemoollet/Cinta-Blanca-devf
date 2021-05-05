/* const sumar = (a, b) => {
    let res = a + b 
    return res
}
let x = sumar(20, sumar(3, sumar(2, 2)))
console.log(x) */

let numero = document.getElementById("numero");
let submit = document.getElementById("submit");
let res = document.getElementById("res");

const calcular = () => {
  event.preventDefault();
  let newnum = numero.value;
  res.innerHTML = factorial(newnum);
};

submit.addEventListener("click", calcular);

// let usuario = prompt('numero')
const factorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado = resultado * i;
  }
  return resultado;
};
// console.log(factorial(usuario))
