"use strict";
import { app } from "./datosFirebase.js";
import * as plantillas from "./plantillas.js";
import * as funciones from "./funciones.js";
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

//BUSCAR CATEGORÍAS
//Buscar Novedades
export const buscNovedades = async (campo, condicion, valor) => {
  const consulta = query(
    prodColeccionNovedades,
    where(campo, condicion, valor)
  );

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Novedades</h1><div id="filtrarNov"></div><div id='colocarNovedades'></div></div>`;
  document.getElementById("filtrarNov").innerHTML = plantillas.filtrar();
  document.getElementById("filtrarNov").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarNovedades"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarNovedades() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "NOVEDADES") {
    console.log("OK");
    buscNovedades("Categoria", "==", "Novedades");
  }
}

//Buscar Disney
export const buscDisney = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionDisney, where(campo, condicion, valor));

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Disney</h1><div id="filtrarDis"></div><div id='colocarDisney'></div></div>`;
  document.getElementById("filtrarDis").innerHTML = plantillas.filtrar();
  document.getElementById("filtrarDis").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarDisney"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarDisney() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "DISNEY") {
    console.log("OK");
    buscDisney("Categoria", "==", "Disney");
  }
}

//Buscar Cine
export const buscCine = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionCine, where(campo, condicion, valor));

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Cine & TV</h1><div id="filtrarCine"></div><div id='colocarCine'></div></div>`;
  document.getElementById("filtrarCine").innerHTML = plantillas.filtrar();
  document.getElementById("filtrarCine").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarCine"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarCine() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "CINE" || mayus == "TV" || mayus == "CINE & TV") {
    console.log("OK");
    buscCine("Categoria", "==", "Cine & TV");
  }
}

//Buscar Videojuegos
export const buscVideojuegos = async (campo, condicion, valor) => {
  const consulta = query(
    prodColeccionVideojuegos,
    where(campo, condicion, valor)
  );

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Videojuegos</h1><div id="filtrarVideojuegos"></div><div id='colocarVideojuegos'></div></div>`;
  document.getElementById(
    "filtrarVideojuegos"
  ).innerHTML = plantillas.filtrar();
  document.getElementById("filtrarVideojuegos").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarVideojuegos"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarVideojuegos() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "VIDEOJUEGOS") {
    console.log("OK");
    buscVideojuegos("Categoria", "==", "Videojuegos");
  }
}

//Buscar Anime
export const buscAnime = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionAnime, where(campo, condicion, valor));

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Anime & Manga</h1><div id="filtrarAnime"></div><div id='colocarAnime'></div></div>`;
  document.getElementById("filtrarAnime").innerHTML = plantillas.filtrar();
  document.getElementById("filtrarAnime").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarAnime"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarAnime() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "ANIME" || mayus == "MANGA" || mayus == "ANIME & MANGA") {
    console.log("OK");
    buscAnime("Categoria", "==", "Anime & Manga");
  }
}

//Buscar Ropa
export const buscRopa = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionRopa, where(campo, condicion, valor));

  const prodNovedades = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Ropa</h1><div id="filtrarRopa"></div><div id='colocarRopa'></div></div>`;
  document.getElementById("filtrarRopa").innerHTML = plantillas.filtrar();
  document.getElementById("filtrarRopa").style.visibility = "hidden";
  prodNovedades.docs.map((documento) => {
    document.getElementById(
      "colocarRopa"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
};

export function buscarRopa() {
  let mayus = document.getElementById("buscarCategoria").value.toUpperCase();
  if (mayus == "ROPA") {
    console.log("OK");
    buscRopa("Categoria", "==", "Ropa");
  }
}
