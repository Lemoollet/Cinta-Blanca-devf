const array = [2, 8, 13, 0, 20, 6];
let resultado = 0;

for (let i = 0; i < array.length; i++) {
  if (i < array.length - 1) {
    let multiplicacion = array[i] * array[i + 1];
    if (multiplicacion > resultado) {
      resultado = multiplicacion;
    }
  }
}
console.log(resultado);
//--------------------------------------------------
const frase = "anita lava la tina";
derecho = "";
reversa = "";

for (i = 0; i < frase.length; i++) {
  let end = frase.length - 1;
  if (frase[i] != " ") {
    derecho += frase[i];
  }
  if (frase[end - i] != " ") {
    reversa += frase[end - i];
  }
  //reversa += palabra[end - i]
}
if (derecho === reversa) {
  console.log("es palindormo");
} else {
  console.log("no lo es ");
}
