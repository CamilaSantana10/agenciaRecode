var cliente = "";
var cpf = "";
var clientes = [];

function guardarCliente() {
  var pessoa = new Object();
  pessoa.nome = document.getElementById("nomeCliente").value;
  pessoa.documento = document.getElementById("cpf").value;

  clientes.push(pessoa);
  document.getElementById("nomeCliente").value = "";
  document.getElementById("cpf").value = "";
  atualizaListaCliente();
}

var destino = "";
var uf = "";
var destinos = [];

function guardarDestino() {
  var lugar = new Object();
  lugar.nome = document.getElementById("nomeDestino").value;
  lugar.documento = document.getElementById("uf").value;
  destinos.push(lugar);
  document.getElementById("nomeDestino").value = "";
  document.getElementById("uf").value = "";
  atualizaListaDestino();
}

function agendarConsulta() {
  var consultar = new Object();
  consultar.nomeC = document.getElementById("selecaoCliente").value;
  consultar.nomeD = document.getElementById("selecaoDestino").value;
  consultar.data = document.getElementById("selecaoData").value;

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var infotd1 = document.createTextNode(consultar.nomeD);
  td1.appendChild(infotd1);

  var td2 = document.createElement("td");
  var infotd2 = document.createTextNode(consultar.nomeC);
  td2.appendChild(infotd2);

  var td3 = document.createElement("td");
  var infotd3 = document.createTextNode(consultar.data);
  td3.appendChild(infotd3);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  var listamodal = document.getElementById("ylistadsdsds");
  listamodal.appendChild(tr);
}

function atualizaListaCliente() {
  document.getElementById("selecaoCliente").innerHTML = "";
  for (var i = 0; i <= clientes.length; i++) {
    var opcaoC = document.createElement("option");
    var cliente = document.createTextNode(clientes[i].nome);
    opcaoC.appendChild(cliente);
    opcaoC.setAttribute("value", clientes[i].nome);
    var selC = document.getElementById("selecaoCliente");
    selC.appendChild(opcaoC);
  }
}
function atualizaListaDestino() {
  document.getElementById("selecaoDestino").innerHTML = "";
  for (var b = 0; b <= destino.length; b++) {
    var opcaoDe = document.createElement("option");
    var destino = document.createTextNode(destino[b].nome);
    opcaoDe.appendChild(destino);
    opcaoDe.setAttribute("value", destino[b].nome);
    var selD = document.getElementById("selecaoDestino");
    selD.appendChild(opcaoDe);
  }
}

function selecaoData() {
  var data = new Date();

  // Guarda cada pedaço em uma variável
  var dia = data.getDate();

  for (var i = dia + 1; i <= 30; i++) {
    var opcaoD = document.createElement("option");
    if (i >= 10) {
      i = i;
    } else {
      i = "0" + i;
    }
    var dia = document.createTextNode(i);
    opcaoD.appendChild(dia);
    var dias = document.getElementById("selecaoData");
    dias.appendChild(opcaoD);
  }
}
selecaoData();
