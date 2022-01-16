//Array con listado de Juegos.
//Arrays + Objetos

/// ------------ Array N-1

const listJuegos = [
  {id: 1, nombre: "Apex", precio: 240, categoria: "Shooter" }, //00
  {id: 2, nombre: "Blasphemous", precio: 420, categoria: "Rogue Like" }, //01
  {id: 3, nombre: "Dead Cells", precio: 569, categoria: "Metroidvania" }, //02
  {id: 4, nombre: "Outlast", precio: 323, categoria: "Terror" }, //03
  {id: 5, nombre: "State of Decay 2", precio: 587, categoria: "Accion RPG" }, //04
  {id: 6, nombre: "The Witcher", precio: 533, categoria: "RPG" }, //05
  {id: 7, nombre: "Dark Souls", precio: 533, categoria: "RPG Accion" }, //06
  {id: 8, nombre: "Deadth's Door", precio: 533, categoria: "Metroidvania" },]; //07

listJuegos.forEach ( ( index ) => { 

  console.log(index);

} );


listJuegos["nombre"] = "World of Warcraft"; //Se agrega un objeto.
console.log(listJuegos); //Trae toda la lista dentro del Array.

console.log("Fin de ForEach Lista de Juegos (Index)"); 



/// ------------- Array N-2

const juegoa = [ { Nombre: "Lucas Fernandez" , Edad: 28, Direccion: "Quequen 1239"}]
const juegob = [ { Nombre: "Patricio Estrella" , Edad: 112, Direccion: "Fondo de Bikini"}]
const juegoc = [ { Nombre: "Jesus Hardcore" , Edad: 999, Direccion: "Your Heart"}]

juegoa.forEach ( ( element, index, array )  => {
  
  console.log(element, index, array);
  
} )

console.log("Fin de ForEach de Personas (element, index, array)")



/// ------------- Array N-3

const frutas = [ "Manzana", "Peras", "Naranjas"]

frutas.forEach ( ( element )  => {
  
  console.log(element);
  
} )

console.log("Fin del forEach de Frutas (element)")


/// ------------- Array N-4
///Sin MetodoContructor.
function Libros (id, nombre, precio, categoria) {

  this.id = id;
  this.nombre = nombre; 
  this.precio = precio;
  this.categoria = categoria;
  this.titulo = function() { console.log("Seleccionaste "+ this.nombre)}

}

const libro1 = new Libros (1, "El Ultimo deseo", 2345, "Fantasia");
libro1.titulo();

const libro2 = new Libros (2, "La Sangre de los Elfos", 4564, "Fantasia");
libro2.titulo();

const libro3 = new Libros (3, "La Espada del Destino", 3234, "Fantasia");
libro3.titulo();


console.log(libro1) //Objeto completo del Array

/// ------------- Array N-5
///Mismo caso que el Anterior, pero con metodo constructor.

class Peliculas {
  
  constructor (id, nombre, precio, categoria) {

  this.id = id;
  this.nombre = nombre; 
  this.precio = precio;
  this.categoria = categoria;
  
  } tituloName() {

    console.log("Seleccionaste "+ this.nombre, "- y su ID:", this.id);
  }

}

const PeliculasA = new Peliculas (1, "Harry el Cerdo Potter", 453, "Fantasia");
PeliculasA.tituloName();

const PeliculasB = new Peliculas (2, "El senor de los bolsillos", 123, "Fantasia");
PeliculasB.tituloName();

const PeliculasC = new Peliculas (3, "Interestelar", 634, "SFI");
PeliculasC.tituloName();


console.log(PeliculasC) //Objeto completo del Array


/// ------------------ Array N-5 Con form
///Pide tus datos mediante el form y lo escribe en el documento.

// alert("Vamos a generar tu usuario, completa los datos del formulario");


function user_Index() {
  var input_User = new Array();
  var input_Values = document.getElementsByClassName("dateIng"),
  
  namesValues = [].map.call(input_Values,function(date_Input){
    input_User.push(date_Input.value);
  }); 

  input_User.forEach(function(input_Values_Data){
    console.log(input_Values_Data);
  }) 

}

