"use strict";

import { app, autentificacion } from "./datosFirebase.js";
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

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const db = getFirestore(app);
const prodColeccionNovedades = collection(db, "Novedades");
const prodColeccionDisney = collection(db, "Disney");
const prodColeccionCine = collection(db, "Cine");
const prodColeccionVideojuegos = collection(db, "Videojuegos");
const prodColeccionAnime = collection(db, "Anime");
const prodColeccionRopa = collection(db, "Ropa");

// FORMULARIO PARA REGISTRARSE
export function formCrearCuenta() {
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML += plantillas.formRegistrarse();
  document.getElementById("botonRegistro").addEventListener(
    "click",
    function () {
      crearUsuario(
        document.getElementById("correoRegistrarse").value,
        document.getElementById("contrasenyaRegistrarse").value,
        document.getElementById("usuarioRegistrarse").value
      );
    },
    false
  );
}

// CREAR USUARIO
const crearUsuario = (usuario, contra, nombreUsu) => {
  createUserWithEmailAndPassword(autentificacion, usuario, contra)
    .then((credenciales) => {
      credenciales.user.displayName = nombreUsu;
      document.getElementById(
        "crearCuenta"
      ).innerHTML = `Bienvenido, ${nombreUsu}`;
      console.log(credenciales);
      document.getElementById("mens").innerHTML =
        "Usuario creado correctamente";
      document.getElementById("mens").classList.add("usuCreado");
    })
    .catch((error) => {
      document.getElementById("mens").innerHTML = "Error al crear el usuario";
      document.getElementById("mens").classList.add("usuMalCreado");
      console.log(error);
    });
};

// FORMULARIO PARA INICIAR SESIÓN
export function formInicioSesion() {
  document.getElementById("cuerpoPagina").innerHTML = "";
  document.getElementById(
    "cuerpoPagina"
  ).innerHTML += plantillas.formInicioSesion();
  document
    .getElementById("botonInicioSesion")
    .addEventListener("click", function () {
      iniciarSesion(
        document.getElementById("correoInicioSesion").value,
        document.getElementById("contrasenyaInicioSesion").value
      );
    });
}

// INICIAR SESIÓN
const iniciarSesion = (usuario, contra) => {
  signInWithEmailAndPassword(autentificacion, usuario, contra)
    .then((credenciales) => {
      const actual = credenciales.user;
      console.log(actual);
      console.log(actual.email);
      console.log(actual.displayName);
      console.log(actual.emailVerified);
    })
    .catch((error) => {
      document.getElementById("mens2").innerHTML = "Error al iniciar sesión";
      document.getElementById("mens2").classList.add("usuMalCreado");
    });
};

// CERRAR SESIÓN
export const cerrarSesion = () => {
  autentificacion
    .signOut()
    .then(() => {
      console.log("salir");
    })
    .catch((error) => {
      console.log(error);
    });
};

export function sesionIniciada() {
  onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
      document.getElementById("cerrarSesion").style.display = "inline";
      document.getElementById("cerrarSesion").innerHTML = "CERRAR SESIÓN";
      document.getElementById("iniciarSesion").style.display = "none";
      console.log(usuario.uid);
    } else {
      document.getElementById("cerrarSesion").style.display = "none";
      document.getElementById("iniciarSesion").style.display = "inline";
      document.getElementById("iniciarSesion").innerHTML = "INICIAR SESIÓN";
      document.getElementById("crearCuenta").innerHTML = "REGISTRARSE";
    }
  });
}
