/* let displayName = document.getElementById('displayName')
let buttonSubmit = document.getElementById('buttonSubmit')
let inputName = document.getElementById('inputName') */

let name = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");

const saludo = () => {
  // event.preventDefault()
  console.log("hola");
};

submit.addEventListener("click", saludo);
