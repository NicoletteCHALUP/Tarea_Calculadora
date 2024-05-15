import sumarNumeros from "./calculadora.js";

const inputField = document.getElementById('input');
const resultField = document.getElementById('result');

function updateResult(result) {
  resultField.textContent = result;
}

function sumar() {
  const cadena = getInput();
  const resultado = sumarNumeros(cadena);
  updateResult(resultado);
}

function getInput() {
  return inputField.value;
}

