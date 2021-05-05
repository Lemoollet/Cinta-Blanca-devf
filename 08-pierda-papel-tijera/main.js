// let jugador1 = prompt('¿Que elijes? piedra, papel o tijera? ')
// let jugador2 = prompt('¿que elijes? piedra, papel o tijera ? ')

// let piedra = 'piedra'
// let papel = 'papel'
// let tijera = 'tijera'

// if (jugador1 === piedra && jugador2 === tijera) {
//     console.log('Gana el jugador 1')
// } else if (jugador1 === papel && jugador2 === piedra) {
//     console.log('Gana el jugador 1 ')
// } else if (jugador1 === tijera && jugador2 === papel) {
//     console.log('Gana el jugador 1 ')
// } else if (jugador1 === jugador2) {
//     console.log(' Esto es un empate ')
// } else {
//     console.log('Gana el jugador 2')
// }

//piedra papel y tijera de Angelo
const opciones = {
  piedra: "piedra",
  papel: "papel",
  tijera: "tijera",
};

let jugador1 = opciones.piedra;
let jugador2 = opciones.papel; //seria lo mimsmo poner ( jugador = 'piedra ) pero es mala practica

if (jugador1 === jugador2) {
  console.log("es un empate");
} else {
  if (jugador1 === opciones.papel) {
    if (jugador2 === opciones.tijera) {
      console.log("gana jugador 2");
    } else {
      console.log("gana el jugador 1");
    }
  } else if (jugador1 === opciones.pierda) {
    if (jugador2 === opciones.papel) {
      console.log("gana jugador 2");
    } else {
      console.log("gana el jugador 1");
    }
  } else {
    if (jugador2 === opciones.piedra) {
      console.log(" gana el jugador 2 ");
    } else {
      console.log(" gana el jugador 1 ");
    }
  }
}
