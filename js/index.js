document.addEventListener("DOMContentLoaded", () => {
  dateNow();
  leerLocalStorage();
 });

const formulario = document.querySelector(".formulario");
const btnEdit = document.querySelector(".header__btn-edit");
const btnCerrar = document.querySelector(".formulario__btn-cerrar");

const tipoGuardia = document.querySelector("#tipo_guardia");
const nombreGuardia = document.querySelector("#nombre_guardia");
const optGuardia = document.querySelector(".opt_guardia");

function editGuardias() {
  formulario.style.display = "flex";
}
btnEdit.addEventListener("click", editGuardias);

function cerrarGuardias() {
  formulario.style.display = "none";
}
btnCerrar.addEventListener("click", cerrarGuardias);

const subtel = [
  { id: 21, nombre: "Raul Caulier", telefono: "+56967605441" },
  { id: 22, nombre: "Manuel Araneda", telefono: "+56967603409" },
  { id: 23, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { id: 4, nombre: "Erwin Eggers", telefono: "+56983410816" },
  { id: 5, nombre: "Daniel Cayuñir", telefono: "+56988888888" },
];
const guardB = [
  { id: 6, nombre: "Andrea Burgos", telefono: "+56967603275" },
  { id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
  { id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { id: 9, nombre: "Patricio Ortega", telefono: "+5697391120" },
];
const guardC = [
  { id: 10, nombre: "Rodrigo Soriano", telefono: "+56982661596" },
  { id: 11, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { id: 12, nombre: "Oscar Vivar", telefono: "+5697391175" },
  { id: 13, nombre: "Ricardo Riebel", telefono: "+5698282252" },
  { id: 14, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { id: 15, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
];

function recorrerArray(array) {
  nombreGuardia.innerHTML = ` <option class="optionStart" selected disable id="Seleccionar">--Seleccionar--</option>`;
  array.map((arr) => {
    const creaOption = `<option class="opt__guardia" id="${arr.id}" name="${arr.telefono}" >${arr.nombre}</option>`;
    nombreGuardia.innerHTML += `${creaOption}`;
  });
}

function optionGuard() {
  const optionSelect = tipoGuardia.options[tipoGuardia.selectedIndex];
  let valor = parseInt(optionSelect.id);
  switch (valor) {
    case 1:
      recorrerArray(subtel);
      break;
    case 2:
      recorrerArray(guardB);
      break;
    case 3:
      recorrerArray(guardC);
      break;
  }
}

//LEER EL LOCALSTORAGE

  function leerLocalStorage() {
  const nameGuardiaSub = document.querySelector(".card__nombre_Sub");
  nameGuardiaSub.textContent = localStorage.getItem("guardiaSub");
  const phoneGuardiaSub = document.querySelector(".card__phone-number_Sub");
  phoneGuardiaSub.textContent = localStorage.getItem("phoneGuardiaSub");
  const nameGuardiaB = document.querySelector(".card__nombre_B");
  nameGuardiaB.textContent = localStorage.getItem("guardiaB");
  const phoneGuardiaB = document.querySelector(".card__phone-number_B");
  phoneGuardiaB.textContent = localStorage.getItem("phoneGuardiaB");
  const nameGuardiaC = document.querySelector(".card__nombre_C");
  nameGuardiaC.textContent = localStorage.getItem("guardiaC");
  const phoneGuardiaC = document.querySelector(".card__phone-number_C");
  phoneGuardiaC.textContent = localStorage.getItem("phoneGuardiaC");
  
  
}

function mostrarData() {
  const optionSel = nombreGuardia.options[nombreGuardia.selectedIndex];
  let optNombre = optionSel.value;
  const phoneOpt = optionSel.attributes.name.textContent;
  const optionSelect = tipoGuardia.options[tipoGuardia.selectedIndex];
  let valor2 = parseInt(optionSelect.id);
  switch (valor2) {
    case 1:
      const nameGuardiaSub = document.querySelector(".card__nombre_Sub");
      const phoneGuardiaSub = document.querySelector(".card__phone-number_Sub");
      nameGuardiaSub.textContent = optNombre;
      phoneGuardiaSub.textContent = phoneOpt;
      localStorage.setItem("guardiaSub", (optNombre));
      localStorage.setItem("phoneGuardiaSub", (phoneOpt));
      break;
    case 2:
      const nameGuardiaB = document.querySelector(".card__nombre_B");
      const phoneGuardiaB = document.querySelector(".card__phone-number_B");
      localStorage.setItem("guardiaB", (optNombre));
      localStorage.setItem("phoneGuardiaB", (phoneOpt));
      nameGuardiaB.textContent = optNombre;
      phoneGuardiaB.textContent = phoneOpt;
      break;
    case 3:
      const nameGuardiaC = document.querySelector(".card__nombre_C");
      const phoneGuardiaC = document.querySelector(".card__phone-number_C");
      localStorage.setItem("guardiaC", (optNombre));
      localStorage.setItem("phoneGuardiaC", (phoneOpt))
      nameGuardiaC.textContent = optNombre;
      phoneGuardiaC.textContent = phoneOpt;
      break;
  }
}

tipoGuardia.addEventListener("change", optionGuard);


/*Funcionalidad de mostrar los cambios elegidos*/
nombreGuardia.addEventListener("change", mostrarData);



/*FECHA ACTUAL EN FORMATO ESPAÑOL */
function dateNow() {
  const fechaActual = document.querySelector(".header__fecha");
  // Creamos array con los meses del año
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  // Creamos array con los días de la semana
  const dias_semana = [
    "Domingo",
    "Lunes",
    "martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  // Creamos el objeto fecha instanciándolo con la clase Date
  const fecha = new Date();
  // Construimos el formato de salida
  fechaActual.innerHTML =
    dias_semana[fecha.getDay()] +
    ", " +
    fecha.getDate() +
    " de " +
    meses[fecha.getMonth()] +
    " de " +
    fecha.getUTCFullYear();
}

/* function pintarCard() {
  const fecha = new Date();
  const dateFormated = fecha.toLocaleDateString();
    if (dateFormated === "12/5/2023") {
      } else {
      }
}
 */

//LocalStorage: Guarda cadenas de texto, clave => Valor
//Set => Guardando
//Get => Obteniendo
/* const nombre = 'pasculi';
console.log(nombre);
localStorage.setItem('nombreUsuario', nombre);

const nombreLocalStorage = localStorage.getItem('nombreUsuario');
console.log(nombreLocalStorage) */