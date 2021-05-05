let name = document.getElementById("name");
let email = document.getElementById("email");
let servicio = document.getElementById("servicio");

const info = () => {
  event.preventDefault();
  let nombrem = name.value;
  document.getElementById("nombre-f").innerHTML = nombrem;
  let emailm = email.value;
  let serviciom = servicio.value;
  document.getElementById("email-f").innerHTML =
    "Hemos enviado un correo a " +
    emailm +
    " confirmando tu servicio favor de revisarlo para cualquier duda";
};

submit.addEventListener("click", info);
