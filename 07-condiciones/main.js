// const password = 'gatitos13'
// let user = prompt('Regresa tu password')

// if ( user === password ) {
//     console.log('bienvenido')
// } else {
//     console.log('contraseña incorrecta :,v')
// }

// operadores logicos:
// <   >   ===     <=     >=     !==

// let numero = prompt('Dame un numero')

// if ( numero% 2 === 0 ) {
//     console.log('tu numero es par')

// }else {
//     console.log('tu numero es inpar')
// }

// let nombre = prompt('dame tu nombre')

// console.log( typeof nombre )

// if ( nombre.length <= 3 ) {
//     console.log('nombre corto')
// } else if ( nombre.length > 3 && nombre.length < 7 ) {
//     console.log('nombre normal')
// }else {
//     console.log('nombre largo')
// }

//operadores logicos para el if
// &&(y)    ||(or)      !(negacion)

// let n = '100'
// console.log(typeof n)
// console.log(n)
// n = Number(n)
// console.log(typeof n)
// console.log(n)
// n = n.toString()
// console.log(typeof n )
// console.log(n)

let ine = true;
let edad = 20;
let residencia = "mexico";

if (edad > 17) {
  if (ine === true) {
    if (residencia === "mexico") {
      console.log("ubica tu casilla para votar");
    } else {
      console.log("acude a la embajada");
    }
  } else {
    console.log("no puedes votar ");
  }
} else {
  console.log("no tienes edad para votar ");
}
