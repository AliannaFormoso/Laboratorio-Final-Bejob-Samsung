//-----Variables globales ------//

let valoracion = [];
let cuenta = [];
const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];

let provincias = [
  "Alava",
  "Albacete",
  "Alicante",
  "Almeria",
  "Avila",
  "Badajoz",
  "Islas Baleares",
  "Barcelona",
  "Burgos",
  "Caceres",
  "Cadiz",
  "Castellon",
  "Ciudad Real",
  "Cordoba",
  "La Coruna",
  "Cuenca",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Giupuzcoa",
  "Huelva",
  "Huesca",
  "Jaen",
  "Leon",
  "Lerida",
  "La Rioja",
  "Lugo",
  "Madrid",
  "Malaga",
  "Murcia",
  "Navarra",
  "Orense",
  "Asturias",
  "Palencia",
  "Las Palmas",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Cantabria",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
  "Ceuta",
  "Melilla"
];

//------Declaracion de funciones solo con alert----------//

function alertaValoracion() {
  let valoracionInterna = document.getElementById("rangoValoracion").value;
  valoracion = valoracionInterna;

  alert("Ha valorado con " + valoracion + " puntos");
}

function alertaCuenta() {
  let cuentaInterna = document.getElementById("cuentaBancaria").value;
  cuenta = cuentaInterna;
  alert("La Información de su cuenta bancaria es " + cuenta);
}

function alertaDiaSemana() {
  let diaSemanaInterna = document.getElementById("fechaEncuesta").value;
  let diaSemana = dias[new Date(diaSemanaInterna).getDay()];
  alert("La fecha seleccionada en el elemento de fecha es un " + diaSemana);
}

//-----------Declaracion de funciones con condicionales -------------------//

function comprobaciones() {
  let cpostal = document.getElementById("codigoPostal").value;
  let localidad = document.getElementById("localidad").value;

  if (
    cpostal === "" ||
    localidad === "" ||
    cpostal === " " ||
    localidad === " "
  ) {
    alert("Debe completar el campo de Codigo Postal y/o de Localidad");
    return false;
  }
  if (cpostal.length !== 5) {
    alert(
      "El Codigo Postal debe tener 5 numeros. Inserte los datos nuevamente"
    );
    return false;
  }

  if (/^([0-9])*$/.test(localidad) || /^[A-Z]+$/i.test(cpostal)) {
    alert(
      "El Codigo Postal debe contener solo Numeros y/o Localidad debe contener solo letras. Inserte los datos nuevamente"
    );
    return false;
  }

  if (cpostal < 1001 || cpostal > 52106) {
    alert("Inserte un Codigo postal Valido para Espana (del 01001 al 52106)");
    return false;
  }

  if (provincias.includes(localidad)) {
    matching();
  } else {
    alert("Inserte una porvincia correcta");
  }
}

function matching() {
  let cpostal = document.getElementById("codigoPostal").value;
  let localidad = document.getElementById("localidad").value;

  let cpostalconvert = cpostal.toString();

  let codAComp = cpostalconvert.substring(0, 2);

  let provAComp = localidad.toString();

  if (
    (codAComp === "01" && provAComp === "Alava") ||
    (codAComp === "02" && provAComp === "Albacete") ||
    (codAComp === "03" && provAComp === "Alicante") ||
    (codAComp === "04" && provAComp === "Almeria") ||
    (codAComp === "05" && provAComp === "Avila") ||
    (codAComp === "06" && provAComp === "Badajoz") ||
    (codAComp === "07" && provAComp === "Islas Baleares") ||
    (codAComp === "08" && provAComp === "Barcelona") ||
    (codAComp === "09" && provAComp === "Burgos") ||
    (codAComp === "10" && provAComp === "Caceres") ||
    (codAComp === "11" && provAComp === "Cadiz") ||
    (codAComp === "12" && provAComp === "Castellon") ||
    (codAComp === "13" && provAComp === "Ciudad Real") ||
    (codAComp === "14" && provAComp === "Cordoba") ||
    (codAComp === "15" && provAComp === "La Coruña") ||
    (codAComp === "16" && provAComp === "Cuenca") ||
    (codAComp === "17" && provAComp === "Gerona") ||
    (codAComp === "18" && provAComp === "Granada") ||
    (codAComp === "19" && provAComp === "Guadalajara") ||
    (codAComp === "20" && provAComp === "Giupuzcoa") ||
    (codAComp === "21" && provAComp === "Huelva") ||
    (codAComp === "22" && provAComp === "Huesca") ||
    (codAComp === "23" && provAComp === "Jaen") ||
    (codAComp === "24" && provAComp === "Leon") ||
    (codAComp === "25" && provAComp === "Lerida") ||
    (codAComp === "26" && provAComp === "La Rioja") ||
    (codAComp === "27" && provAComp === "Lugo") ||
    (codAComp === "28" && provAComp === "Madrid") ||
    (codAComp === "29" && provAComp === "Malaga") ||
    (codAComp === "30" && provAComp === "Murcia") ||
    (codAComp === "31" && provAComp === "Navarra") ||
    (codAComp === "32" && provAComp === "Orense") ||
    (codAComp === "33" && provAComp === "Asturias") ||
    (codAComp === "34" && provAComp === "Palencia") ||
    (codAComp === "35" && provAComp === "Las Palmas") ||
    (codAComp === "36" && provAComp === "Pontevedra") ||
    (codAComp === "37" && provAComp === "Salamanca") ||
    (codAComp === "38" && provAComp === "Santa Cruz de Tenerife") ||
    (codAComp === "39" && provAComp === "Cantabria") ||
    (codAComp === "40" && provAComp === "Segovia") ||
    (codAComp === "41" && provAComp === "Sevilla") ||
    (codAComp === "42" && provAComp === "Soria") ||
    (codAComp === "43" && provAComp === "Tarragona") ||
    (codAComp === "44" && provAComp === "Teruel") ||
    (codAComp === "45" && provAComp === "Toledo") ||
    (codAComp === "46" && provAComp === "Valencia") ||
    (codAComp === "47" && provAComp === "Valladolid") ||
    (codAComp === "48" && provAComp === "Vizcaya") ||
    (codAComp === "49" && provAComp === "Zamora") ||
    (codAComp === "50" && provAComp === "Zaragoza") ||
    (codAComp === "51" && provAComp === "Ceuta") ||
    (codAComp === "52" && provAComp === "Melilla")
  ) {
    const verde = document.createElement("h4");
    verde.textContent = "La Provincia y el CP coinciden";
    verde.setAttribute("id", "verde");
    document.getElementById("mensaje").appendChild(verde);
    document.getElementById("verde").style.color = "green";
  } else {
    const rojo = document.createElement("h4");
    rojo.textContent = "La Provincia y el CP NO coinciden";
    rojo.setAttribute("id", "rojo");
    document.getElementById("mensaje").appendChild(rojo);
    document.getElementById("rojo").style.color = "red";
  }
}
