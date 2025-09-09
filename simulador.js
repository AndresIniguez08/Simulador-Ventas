// Declaro las contantes
const NOMBRE_TIENDA = "GameZone";
const DESCUENTO = 0.15;

// Array con jueguitos
let juegos = [
  { nombre: "FIFA 24", precio: 50000 },
  { nombre: "Call of Duty", precio: 60000 },
  { nombre: "Minecraft", precio: 30000 },
];

// Variables para guardar datos
let cliente = "";
let juegoSeleccionado = "";
let total = 0;

// funcion para preguntar el nombre del cliente
function obtenerDatosCliente() {
  cliente = prompt("Ingresa tu nombre:");

  if (cliente === null || cliente === "") {
    alert("Nombre requerido para continuar");
    return false;
  }

  console.log("Cliente registrado: " + cliente);
  return true;
}

// Funcion 2: trabajo con los datos y calculos
function procesarVenta() {
  // Mostrar catalogo
  let catalogo = "Catalogo de juegos:\n";
  for (let i = 0; i < juegos.length; i++) {
    catalogo +=
      i + 1 + ". " + juegos[i].nombre + " - $" + juegos[i].precio + "\n";
  }

  let opcion = parseInt(prompt(catalogo + "\nSelecciona un juego (1-3):"));

  if (opcion >= 1 && opcion <= 3) {
    juegoSeleccionado = juegos[opcion - 1].nombre;
    let precioBase = juegos[opcion - 1].precio;

    console.log("Juego seleccionado: " + juegoSeleccionado);
    console.log("Precio base: $" + precioBase);

    // Pregunto si es cliente frecuente y le doy descuento
    let aplicarDescuento = confirm("Eres cliente frecuente? (Descuento 15%)");

    if (aplicarDescuento) {
      total = precioBase - precioBase * DESCUENTO;
      console.log("Descuento aplicado: 15%");
    } else {
      total = precioBase;
    }

    console.log("Total a pagar: $" + total);
    return true;
  } else {
    alert("Opcion no valida");
    return false;
  }
}

// Funcion 3: muestro los resultados
function mostrarResultados() {
  let resumen = "RESUMEN DE COMPRA\n";
  resumen += "==================\n";
  resumen += "Cliente: " + cliente + "\n";
  resumen += "Juego: " + juegoSeleccionado + "\n";
  resumen += "Total: $" + total + "\n";
  resumen += "Gracias por tu compra en " + NOMBRE_TIENDA;

  alert(resumen);
  console.log("Venta procesada correctamente");
  console.log("Cliente: " + cliente + " - Total: $" + total);
}

// Funcion principal para iniciar el simulador
function iniciarSimulador() {
  console.log("=== INICIANDO SIMULADOR " + NOMBRE_TIENDA + " ===");

  // aca le doy el orden a seguir
  if (obtenerDatosCliente()) {
    if (procesarVenta()) {
      mostrarResultados();
    }
  }

  console.log("=== SIMULADOR FINALIZADO ===");
}

// Funciones para los botones
function mostrarCatalogo() {
  let catalogo = "CATALOGO " + NOMBRE_TIENDA + ":\n";
  for (let i = 0; i < juegos.length; i++) {
    catalogo += juegos[i].nombre + " - $" + juegos[i].precio + "\n";
  }
  alert(catalogo);
  console.log("Catalogo mostrado");
}

function realizarVenta() {
  iniciarSimulador();
}

function consultarInventario() {
  alert("Inventario: " + juegos.length + " juegos disponibles");
  console.log("Consulta de inventario realizada");
}

// Mensaje de arranque
console.log("Simulador cargado. Escribe iniciarSimulador() o usa los botones");
