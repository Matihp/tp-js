let formulario = document.querySelector("#formDetails");
let select = document.querySelector("#changeCat");

const ticket = 200;
let valorTotal;

let opciones = document.querySelectorAll(".category");
opciones.forEach(function (opcion) {
  opcion.addEventListener("click", function () {
    let value = opcion.dataset.opcion;
    cambiarOpcionDescuento(value);
  });
});

function cambiarOpcionDescuento(value) {
  select.value = value;
  select.dispatchEvent(new Event("change"));
}

const btnResumen = document.querySelector("#btnResumen");
btnResumen.addEventListener("click", agregarDescuento);

function agregarDescuento(e) {
  e.preventDefault();
  let inputCantidad = document.querySelector("#inptCantidad");
  let cantidad = inputCantidad.value;
  let opcion = select.value;
  let descuento;

  switch (opcion) {
    case "1":
      descuento = 0.2;
      break;
    case "2":
      descuento = 0.5;
      break;
    case "3":
      descuento = 0.85;
      break;
    default:
      descuento = 1;
      break;
  }

  totalTickets = ticket * descuento * cantidad;
  document.querySelector(".totalPay").innerHTML ="Total a Pagar: $" + totalTickets;
}
