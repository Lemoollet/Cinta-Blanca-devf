/* estructura de un objeto (persona es una variable que dentro tiene un objeto)
let persona = {       
   clave: valor
} */

let persona = {
  nombre: "Moy",
  edad: "28",
  email: "moy-10@live.com",
  direccion: {
    //se pueden tener objetos dentro de objetos y dicho objeto tener atributos
    calle: "sagitario",
    exterior: "1",
    colonia: "naucalpan",
  },
  bandasFavoritas: ["muse", "alabama shakes", "pate de fua"],
};

console.log(persona.nombre); //para acceder a un valor del objeto es: el nombre del objeto y su atributo
console.log(persona.bandasFavoritas[0]);

//JSON javaScript object notation, como se comunica todo (SWAPI)
