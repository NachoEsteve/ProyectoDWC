"use strict";

export const filtrar = () => {
  return `
  <ul class="listaBuscador">
    <li class="puedoGastar">ME PUEDO GASTAR</li>
    <li class="dinero" id="menosDeCinco" style="color: yellow"><dd>MENOS DE 5€</dd></li>
    <li class="dinero" id="entre5Y20" style="color: yellow">
      <dd>MENOS DE 20€</dd>
    </li>
    <li class="dinero" id="entre20Y50" style="color: yellow">
      <dd>MENOS DE 50€</dd>
    </li>
    <li class="dinero" id="maximo" style="color: yellow"><dd>MÁS DE 50€</dd></li>
  </ul>
  `;
};

export const mostrarProducto = (documento) => {
  return `
    <div class="producto" id="${
      documento.id
    }"><div class="imagenes"><img src="${documento.data().Imagen}">
      </div>
      <div class="datos">
        <div class="nombre">${documento.data().Nombre}</div>
        <div class="categoria">${documento.data().Categoria}</div><br>
      </div>
      <footer class="pieProducto" id="${documento.data().Nombre}">
      ${documento.data().Precio}€
      <input type="button" value="Comprar" class="comprarBoton">
      </footer>
    </div>`;
};

export const crearCesta = () => {
  return `
  <form class="formCrearCesta">
    Nombre de la lista: <input type="text" id="nombreCesta"><br>
    <input type="button" id="botonCrearCesta" value="Crear Cesta"><input type="button" id="botonMostrarCesta" value="Mostrar Cestas">
  </form>
  <div id="mensaje"></div>
  `;
};

export const mostrarCestas = (documento) => {
  return `
  <div class="totalCestas" id="${documento.id}">
    <p class="negrita">${documento.data().Nombre}</p>
    <p id=prod>Productos: ${documento.data().Productos.length}</p>
    <input type="button" class="seleccionar" value="Seleccionar">
    <input type="button" class="mostrarCesta" value="Ver cesta">
  </div>
  `;
};

export const mostrarProductosCesta = (documento) => {
  return `
    <p class="oculto">Productos:<br> ${documento.data().Productos}<br>
    <br><input type="button" class="comprar" value="Realizar pedido"></p>
  `;
};

export const formRegistrarse = () => {
  return `
  
  <form class="registro">
    Usuario: <input type="text" id="usuarioRegistrarse"><br><br>
    Correo: <input type="email" id="correoRegistrarse"><br><br>
    Contraseña: <input type="password" id="contrasenyaRegistrarse"><br><br>
    <input type="button" id="botonRegistro" value="Registrarse">
  </form>
  <div id="mens"></div>
  `;
};

export const formInicioSesion = () => {
  return `
  <form class="formInicioSesion">
    Correo: <input type="email" id="correoInicioSesion"><br><br>
    Contraseña: <input type="password" id="contrasenyaInicioSesion"><br><br>
    <input type="button" id="botonInicioSesion" value="Iniciar Sesion">
  </form>
  <div id="mens2"></div>
  `;
};
