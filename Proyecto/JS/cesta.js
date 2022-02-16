"use strict";
import { app } from "./datosFirebase.js";
import * as plantillas from "./plantillas.js";
import * as funciones from "./funciones.js";
import * as filtrarDinero from "./filtrarPorDinero.js";
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
const cestaColeccion = collection(db, "Cesta");

var listaId;

export function mostrarFormCesta() {
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById("cuerpoPagina").innerHTML += plantillas.crearCesta();
  botonCrearCesta();
  botonMostrarCestas();
}

/* CREAR CESTA */

function crearCesta() {
  const nuevaCesta = {
    Nombre: document.getElementById("nombreCesta").value,
    Productos: [],
  };
  const cesta = async (list) => {
    const cestaGuardada = await addDoc(cestaColeccion, list);
  };

  cesta(nuevaCesta);
}

function botonCrearCesta() {
  document.getElementById("botonCrearCesta").addEventListener(
    "click",
    function () {
      if (document.getElementById("nombreCesta").value == "") {
        document.getElementById("mensaje").innerHTML =
          "<p id='mensajeMal'>Debes rellenar el nombre de la lista</p>";
      } else {
        crearCesta();
        document.getElementById("mensaje").innerHTML =
          "<p id='mensajeBien'>Lista creadaCorrectamente</p>";
      }
    },
    false
  );
}

//MOSTRAR LAS CESTAS CREADAS
export const obtenerCestas = async () => {
  const cestasCreadas = await onSnapshot(cestaColeccion, (lis) => {
    document.getElementById("cuerpoPagina").innerHTML = "";
    lis.docs.map((documento) => {
      document.getElementById("cestas").innerHTML += plantillas.mostrarCestas(
        documento
      );
    });
    seleccionarCesta();
    mostrarProductosCesta();
  });
};

function botonMostrarCestas() {
  document.getElementById("botonMostrarCesta").addEventListener(
    "click",
    function () {
      obtenerCestas();
    },
    false
  );
}

//SELECCIONAR CESTA PARA AÑADIR PRODUCTOS

function seleccionarCesta() {
  var arraySelect = document.getElementsByClassName("seleccionar");
  for (let i = 0; i < arraySelect.length; i++) {
    arraySelect[i].addEventListener(
      "click",
      function () {
        listaId = arraySelect[i].parentNode.id;
        let nombreCesta = arraySelect[i].parentNode.firstElementChild.innerHTML;
        actualizarNombreCesta(nombreCesta);
        seleccionarProd();
      },
      false
    );
  }
}

function actualizarNombreCesta(nombre) {
  document.getElementById(
    "cestaSeleccionada"
  ).innerHTML = `CESTA SELECCIONADA: ${nombre}`;
}

//METER PRODUCTOS EN LA CESTA
const seleccionarProd = async () => {
  document.getElementById("cestas").innerHTML = "";
  await funciones.mostrarCategoriasNovedades();
  seleccionarProducto();
};

export function seleccionarProducto() {
  var arrayAnadir = document.getElementsByClassName("comprarBoton");
  for (let i = 0; i < arrayAnadir.length; i++) {
    arrayAnadir[i].addEventListener(
      "click",
      async function () {
        let nombreProd = arrayAnadir[i].parentNode.id;
        console.log(nombreProd);
        await actualizarCesta(listaId, nombreProd);
      },
      false
    );
  }
}

const actualizarCesta = async (listaID, nombreProd) => {
  const meterProducto = await doc(cestaColeccion, listaID);
  await updateDoc(meterProducto, {
    Productos: arrayUnion(nombreProd),
  });
  seleccionarProd();
};

//MOSTRAR CESTAS
function mostrarProductosCesta() {
  var arrayProductos = document.getElementsByClassName("mostrarCesta");
  for (let i = 0; i < arrayProductos.length; i++) {
    arrayProductos[i].addEventListener(
      "click",
      function () {
        let idCesta = arrayProductos[i].parentNode.id;

        verCesta(idCesta);
      },
      false
    );
  }
}

const verCesta = async (id) => {
  const verProductos = await doc(cestaColeccion, id);
  const verProdCesta = await getDoc(verProductos);
  //document.getElementById(id).innerHTML = "";
  if (verProdCesta.data().Productos.length == 0) {
    document.getElementById(
      id
    ).innerHTML += `<br><p>No hay productos en esta cesta</p>`;
  } else {
    document.getElementById(id).innerHTML += plantillas.mostrarProductosCesta(
      verProdCesta
    );
    document.getElementById(id).style.backgroundColor = "purple";
    document.getElementById(id).style.color = "white";
    realizarPedido();
  }
};

function realizarPedido() {
  var comprar = document.getElementsByClassName("comprar");
  for (let i = 0; i < comprar.length; i++) {
    comprar[i].addEventListener(
      "click",
      function () {
        document.getElementById("cestas").innerHTML = "";
        mostrarFormCesta();
      },
      false
    );
  }
}
