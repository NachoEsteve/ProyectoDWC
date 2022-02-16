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

var cinco = "5";
var veinte = "20";
var cincuenta = "50";
var max = "1000";

// FILTRAR NOVEDADES
const filtrarNovedades = async (campo, condicion, valor) => {
  const consulta = query(
    prodColeccionNovedades,
    where(campo, condicion, valor)
  );

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Novedades</h1><div id="filtrarNov"></div><div id='colocarNovedades'></div></div>`;
  document.getElementById("filtrarNov").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarNovedades"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarNovedadesPorDinero1();
  filtrarNovedadesPorDinero2();
  filtrarNovedadesPorDinero3();
  filtrarNovedadesPorDinero4();
};

// Menos de 5
function filtrarNovedadesMenos5() {
  filtrarNovedades("Precio", "<=", parseFloat(cinco));
}

export function filtrarNovedadesPorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarNovedadesMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarNovedades5Y20() {
  filtrarNovedades("Precio", "<=", parseFloat(veinte));
}

export function filtrarNovedadesPorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarNovedades5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarNovedades20Y50() {
  filtrarNovedades("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarNovedadesPorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarNovedades20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarNovedadesMax() {
  filtrarNovedades("Precio", "<=", parseFloat(max));
}

export function filtrarNovedadesPorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarNovedadesMax();
      console.log("OK");
    },
    false
  );
}

// FILTRAR DISNEY
const filtrarDisney = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionDisney, where(campo, condicion, valor));

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Disney</h1><div id="filtrarDis"></div><div id='colocarDisney'></div></div>`;
  document.getElementById("filtrarDis").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarDisney"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarDisneyPorDinero1();
  filtrarDisneyPorDinero2();
  filtrarDisneyPorDinero3();
  filtrarDisneyPorDinero4();
};

// Menos de 5
function filtrarDisneyMenos5() {
  filtrarDisney("Precio", "<=", parseFloat(cinco));
}

export function filtrarDisneyPorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarDisneyMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarDisney5Y20() {
  filtrarDisney("Precio", "<=", parseFloat(veinte));
}

export function filtrarDisneyPorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarDisney5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarDisney20Y50() {
  filtrarDisney("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarDisneyPorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarDisney20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarDisneyMax() {
  filtrarDisney("Precio", "<=", parseFloat(max));
}

export function filtrarDisneyPorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarDisneyMax();
      console.log("OK");
    },
    false
  );
}

// FILTRAR CINE
const filtrarCine = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionCine, where(campo, condicion, valor));

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Cine & TV</h1><div id="filtrarCine"></div><div id='colocarCine'></div></div>`;
  document.getElementById("filtrarCine").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarCine"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarCinePorDinero1();
  filtrarCinePorDinero2();
  filtrarCinePorDinero3();
  filtrarCinePorDinero4();
};

// Menos de 5
function filtrarCineMenos5() {
  filtrarCine("Precio", "<=", parseFloat(cinco));
}

export function filtrarCinePorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarCineMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarCine5Y20() {
  filtrarCine("Precio", "<=", parseFloat(veinte));
}

export function filtrarCinePorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarCine5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarCine20Y50() {
  filtrarCine("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarCinePorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarCine20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarCineMax() {
  filtrarCine("Precio", "<=", parseFloat(max));
}

export function filtrarCinePorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarCineMax();
      console.log("OK");
    },
    false
  );
}

// FILTRAR VIDEOJUEGOS
const filtrarVideojuegos = async (campo, condicion, valor) => {
  const consulta = query(
    prodColeccionVideojuegos,
    where(campo, condicion, valor)
  );

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Videojuegos</h1><div id="filtrarVid"></div><div id='colocarVideojuegos'></div></div>`;
  document.getElementById("filtrarVid").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarVideojuegos"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarVideojuegosPorDinero1();
  filtrarVideojuegosPorDinero2();
  filtrarVideojuegosPorDinero3();
  filtrarVideojuegosPorDinero4();
};

// Menos de 5
function filtrarVideojuegosMenos5() {
  filtrarVideojuegos("Precio", "<=", parseFloat(cinco));
}

export function filtrarVideojuegosPorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarVideojuegosMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarVideojuegos5Y20() {
  filtrarVideojuegos("Precio", "<=", parseFloat(veinte));
}

export function filtrarVideojuegosPorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarVideojuegos5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarVideojuegos20Y50() {
  filtrarVideojuegos("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarVideojuegosPorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarVideojuegos20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarVideojuegosMax() {
  filtrarVideojuegos("Precio", "<=", parseFloat(max));
}

export function filtrarVideojuegosPorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarVideojuegosMax();
      console.log("OK");
    },
    false
  );
}

// FILTRAR ANIME
const filtrarAnime = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionAnime, where(campo, condicion, valor));

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Anime & Manga</h1><div id="filtrarAni"></div><div id='colocarAnime'></div></div>`;
  document.getElementById("filtrarAni").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarAnime"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarAnimePorDinero1();
  filtrarAnimePorDinero2();
  filtrarAnimePorDinero3();
  filtrarAnimePorDinero4();
};

// Menos de 5
function filtrarAnimeMenos5() {
  filtrarAnime("Precio", "<=", parseFloat(cinco));
}

export function filtrarAnimePorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarAnimeMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarAnime5Y20() {
  filtrarAnime("Precio", "<=", parseFloat(veinte));
}

export function filtrarAnimePorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarAnime5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarAnime20Y50() {
  filtrarAnime("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarAnimePorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarAnime20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarAnimeMax() {
  filtrarAnime("Precio", "<=", parseFloat(max));
}

export function filtrarAnimePorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarAnimeMax();
      console.log("OK");
    },
    false
  );
}

// FILTRAR ROPA
const filtrarRopa = async (campo, condicion, valor) => {
  const consulta = query(prodColeccionRopa, where(campo, condicion, valor));

  const prodFiltrados = await getDocs(consulta);
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML = `<div class='cuerpoPagina2'><h1 class="tituloCategorias">Ropa</h1><div id="filtrarRopa"></div><div id='colocarRopa'></div></div>`;
  document.getElementById("filtrarRopa").innerHTML = plantillas.filtrar();
  prodFiltrados.docs.map((documento) => {
    document.getElementById(
      "colocarRopa"
    ).innerHTML += plantillas.mostrarProducto(documento);
  });
  filtrarRopaPorDinero1();
  filtrarRopaPorDinero2();
  filtrarRopaPorDinero3();
  filtrarRopaPorDinero4();
};

// Menos de 5
function filtrarRopaMenos5() {
  filtrarRopa("Precio", "<=", parseFloat(cinco));
}

export function filtrarRopaPorDinero1() {
  document.getElementById("menosDeCinco").addEventListener(
    "click",
    function () {
      filtrarRopaMenos5();
    },
    false
  );
}

// Entre 5 y 20
function filtrarRopa5Y20() {
  filtrarRopa("Precio", "<=", parseFloat(veinte));
}

export function filtrarRopaPorDinero2() {
  document.getElementById("entre5Y20").addEventListener(
    "click",
    function () {
      filtrarRopa5Y20();
    },
    false
  );
}

// Entre 20 y 50
export function filtrarRopa20Y50() {
  filtrarRopa("Precio", "<=", parseFloat(cincuenta));
}

export function filtrarRopaPorDinero3() {
  document.getElementById("entre20Y50").addEventListener(
    "click",
    function () {
      filtrarRopa20Y50();
    },
    false
  );
}

// Más de 50
export function filtrarRopaMax() {
  filtrarRopa("Precio", "<=", parseFloat(max));
}

export function filtrarRopaPorDinero4() {
  document.getElementById("maximo").addEventListener(
    "click",
    function () {
      filtrarRopaMax();
    },
    false
  );
}

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
