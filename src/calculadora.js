function sumarNumeros(cadena) {
  if (cadena === "") return 0;

  let delimitador = ",";
  if (cadena.startsWith("//")) {
    const partes = cadena.split("\n");
    delimitador = partes[0][2];
    cadena = partes[1];
  }

  return cadena
    .split(delimitador)
    .reduce((total, num) => total + parseInt(num), 0);
}


export default sumarNumeros;