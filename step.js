let objAnagrafica = {};
let objRegistrazione = {};
let utenteRegistrato = {};

$(document).ready(function () {
  sessionStorage.clear();
  $("#anagrafica").click(() => {
    $("#anagraficaForm").toggle().toggleClass("db");
  });
  $("#datiUtente").click(() => {
    $("#registrazioneForm").toggle().toggleClass("db");
  });
  $("#conferma").click(() => {
    $("#stampaSalva").toggle().toggleClass("db");
  });
  $("#anagraficaForm input").on("keyup", () => {
    verificaCampiAnagrafica();
  });
  $("#registrazioneForm input").on("keyup", () => {
    verificaCampiRegistrazione();
  });
});

function registraAnagrafica() {
  event.preventDefault();
  let anagraficaFormDati = $("#anagraficaForm form").serializeArray();
  console.log("eccomi", anagraficaFormDati);
  anagraficaFormDati.forEach((e) => {
    objAnagrafica[e.name] = e.value;
  });
  console.log(objAnagrafica);
  $("#anagrafica").css("background-color", "aliceblue");
  $("#anagraficaForm").toggle().toggleClass("dn");
  $("#datiUtente").css("background-color", "burlywood");
  $("#registrazioneForm").toggle().toggleClass("db");
}

function registraEmailPassword() {
  event.preventDefault();
  let registrazioneFormDati = $("#registrazioneForm form").serializeArray();
  console.log(registrazioneFormDati);
  registrazioneFormDati.forEach((e) => {
    objRegistrazione[e.name] = e.value;
  });
  console.log(objRegistrazione);
  $("#datiUtente").css("background-color", "aliceblue");
  $("#conferma").css("background-color", "burlywood");
  $("#registrazioneForm").toggle().toggleClass("dn");
  $("#stampaSalva").css("display", "flex");
}

function verificaCampiAnagrafica() {
  if ($("#nome").val() !== "" && $("#cognome").val() !== "") {
    $("#anagraficaForm button ").removeAttr("disabled");
  } else {
    $("#anagraficaForm button ").attr("disabled", "disabled");
  }
}

function verificaCampiRegistrazione() {
  if ($("#email").val() !== "" && $("#password").val() !== "") {
    $("#registrazioneForm button ").removeAttr("disabled");
  } else {
    $("#registrazioneForm button ").attr("disabled", "disabled");
  }
}

function salva() {
  console.log("ho cliccato su salva");
  $("#modale").css("display", "flex");
  $("#stampaSalva").css("display", "none");
  utenteRegistrato = Object.assign({}, objAnagrafica, objRegistrazione);

  $("#riepilogoUtente").html(`<p>
  ${utenteRegistrato.nome}  ${utenteRegistrato.cognome}</p><p>${utenteRegistrato.email}</p>`);
  console.log(utenteRegistrato);
}

function stampa() {
  utenteRegistrato = Object.assign({}, objAnagrafica, objRegistrazione);
  sessionStorage.setItem("utenteRegistrato", JSON.stringify(utenteRegistrato));
  window.location.href = "nuovaPagina.html";
}

function chiudi() {
  window.location.reload();
}
