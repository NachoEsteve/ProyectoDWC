"use strict";

import * as funciones from "./funciones.js";
import * as buscar from "./buscarCategoria.js";
import * as cesta from "./cesta.js";
import * as usuario from "./usuarios.js";

window.onload = () => {
  funciones.mostrarNovedades();
  funciones.mostrarDsiney();
  usuario.sesionIniciada();

  //VOLVER AL INICIO
  document.getElementById("inicio").addEventListener(
    "click",
    function () {
      location.reload();
    },
    false
  );

  //MOSTRAR LOS PRODUCROS DE LAS DIFERENTES CATEGORÍAS
  document.getElementById("catNovedades").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasNovedades();
    },
    false
  );

  document.getElementById("catDisney").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasDisney();
    },
    false
  );

  document.getElementById("catCine").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasCine();
    },
    false
  );

  document.getElementById("catVideojuegos").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasVideojuegos();
    },
    false
  );

  document.getElementById("catAnime").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasAnime();
    },
    false
  );

  document.getElementById("catRopa").addEventListener(
    "click",
    function () {
      funciones.mostrarCategoriasRopa();
    },
    false
  );

  document.getElementById("botonBuscar").addEventListener(
    "click",
    function () {
      buscar.buscarNovedades();
      buscar.buscarDisney();
      buscar.buscarCine();
      buscar.buscarVideojuegos();
      buscar.buscarAnime();
      buscar.buscarRopa();
    },
    false
  );

  // CREAR UNA CESTA
  /*document.getElementById("botonCesta").addEventListener(
    "click",
    function () {
      cesta.mostrarFormCesta();
    },
    false
  );
*/

  // REGISTRARSE
  document.getElementById("crearCuenta").addEventListener(
    "click",
    function () {
      usuario.formCrearCuenta();
    },
    false
  );

  // INICIAR SESIÓN
  document.getElementById("iniciarSesion").addEventListener(
    "click",
    function () {
      usuario.formInicioSesion();
    },
    false
  );

  // CERRAR SESIÓN
  document.getElementById("cerrarSesion").addEventListener(
    "click",
    function () {
      usuario.cerrarSesion();
    },
    false
  );
};
