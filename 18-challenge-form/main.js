let name = document.getElementById("name");
let email = document.getElementById("email");
let descripcion = document.getElementById("descrpcion");

const tarjeta = () => {
  event.preventDefault();
  let nombre = name.value;
  document.getElementById("titulo").innerHTML = nombre;
  let correoo = email.value;
  document.getElementById("correo").innerHTML = correoo;
  let descripcionn = descripcion.value;
  document.getElementById("breve").innerHTML = descripcionn;
};

submit.addEventListener("click", tarjeta);
