"use strict";

import { app } from "./datosFirebase.js";
import * as plantillas from "./plantillas.js";
import * as filtrarDinero from "./filtrarPorDinero.js";
import * as cesta from "./cesta.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore(app);
const prodColeccionNovedades = collection(db, "Novedades");
const prodColeccionDisney = collection(db, "Disney");
const prodColeccionCine = collection(db, "Cine");
const prodColeccionVideojuegos = collection(db, "Videojuegos");
const prodColeccionAnime = collection(db, "Anime");
const prodColeccionRopa = collection(db, "Ropa");

//MOSTRAR LAS NOVEDADES
export const mostrarNovedades = async () => {
  const productos = await getDocs(prodColeccionNovedades);
  productos.docs.map((documento, i) => {
    if (i < 4) {
      document.getElementById(
        "novedades"
      ).innerHTML += plantillas.mostrarProducto(documento);
    }
  });
};

//MOSTRAR DISNEY
export const mostrarDsiney = async () => {
  const productos = await getDocs(prodColeccionDisney);
  productos.docs.map((documento, i) => {
    if (i < 4) {
      document.getElementById("disney").innerHTML += plantillas.mostrarProducto(
        documento
      );
    }
  });
};

//MOSTRAR CATEGORÍAS

//Categorías Novedades
//Mostramos los productos de la categoría "Novedades".
export const mostrarCategoriasNovedades = async () => {
  const novedades = await getDocs(prodColeccionNovedades);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Novedades</h1><div id="filtrarNov"></div><div id='colocarNovedades'></div></div>`;
  document.getElementById("filtrarNov").innerHTML = plantillas.filtrar();
  novedades.docs.map((documento) => {
    document.getElementById(
      "colocarNovedades"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarNovedadesPorDinero1();
  filtrarDinero.filtrarNovedadesPorDinero2();
  filtrarDinero.filtrarNovedadesPorDinero3();
  filtrarDinero.filtrarNovedadesPorDinero4();
  cesta.seleccionarProducto();
};

//Categorías Disney
//Mostramos los productos de la categoría "Disney".
export const mostrarCategoriasDisney = async () => {
  const disney = await getDocs(prodColeccionDisney);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Disney</h1><div id="filtrarDis"></div><div id='colocarDisney'></div></div>`;
  document.getElementById("filtrarDis").innerHTML = plantillas.filtrar();
  disney.docs.map((documento) => {
    document.getElementById(
      "colocarDisney"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarDisneyPorDinero1();
  filtrarDinero.filtrarDisneyPorDinero2();
  filtrarDinero.filtrarDisneyPorDinero3();
  filtrarDinero.filtrarDisneyPorDinero4();
  cesta.seleccionarProducto();
};

//Categorías Cine
//Mostramos los productos de la categoría "Cine & TV".
export const mostrarCategoriasCine = async () => {
  const cine = await getDocs(prodColeccionCine);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Cine & TV</h1><div id="filtrarCine"></div><div id='colocarCine'></div></div>`;
  document.getElementById("filtrarCine").innerHTML = plantillas.filtrar();
  cine.docs.map((documento) => {
    document.getElementById(
      "colocarCine"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarCinePorDinero1();
  filtrarDinero.filtrarCinePorDinero2();
  filtrarDinero.filtrarCinePorDinero3();
  filtrarDinero.filtrarCinePorDinero4();
  cesta.seleccionarProducto();
};

//Categorias Videojuegos
//Mostramos los productos de la categoría "Videojuegos".
export const mostrarCategoriasVideojuegos = async () => {
  const videojuegos = await getDocs(prodColeccionVideojuegos);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Videojuegos</h1><div id="filtrarVid"></div><div id='colocarVideojuegos'></div></div>`;
  document.getElementById("filtrarVid").innerHTML = plantillas.filtrar();
  videojuegos.docs.map((documento) => {
    document.getElementById(
      "colocarVideojuegos"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarVideojuegosPorDinero1();
  filtrarDinero.filtrarVideojuegosPorDinero2();
  filtrarDinero.filtrarVideojuegosPorDinero3();
  filtrarDinero.filtrarVideojuegosPorDinero4();
  cesta.seleccionarProducto();
};

//Categorías Anime
//Mostramos los productos de la categoría "Anime & Manga".
export const mostrarCategoriasAnime = async () => {
  const anime = await getDocs(prodColeccionAnime);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Anime & Manga</h1><div id="filtrarAni"></div><div id='colocarAnime'></div></div>`;
  document.getElementById("filtrarAni").innerHTML = plantillas.filtrar();
  anime.docs.map((documento) => {
    document.getElementById(
      "colocarAnime"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarAnimePorDinero1();
  filtrarDinero.filtrarAnimePorDinero2();
  filtrarDinero.filtrarAnimePorDinero3();
  filtrarDinero.filtrarAnimePorDinero4();
  cesta.seleccionarProducto();
};

//Categorias Ropa
//Mostramos los productos de la categoría "Ropa".
export const mostrarCategoriasRopa = async () => {
  const ropa = await getDocs(prodColeccionRopa);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Ropa</h1><div id="filtrarRopa"></div><div id='colocarRopa'></div></div>`;
  document.getElementById("filtrarRopa").innerHTML = plantillas.filtrar();
  ropa.docs.map((documento) => {
    document.getElementById(
      "colocarRopa"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDinero.filtrarRopaPorDinero1();
  filtrarDinero.filtrarRopaPorDinero2();
  filtrarDinero.filtrarRopaPorDinero3();
  filtrarDinero.filtrarRopaPorDinero4();
  cesta.seleccionarProducto();
};

//CREAR CESTA
