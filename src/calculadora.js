function sumarNumeros(cadena) {
  if (cadena === "") return 0;

 
  const [delimitador, numeros] = obtenerDelimitadorYNumeros(cadena);

    const numerosComoArray =numeros.split(delimitador)
    .map(Number)
    .filter(num => num <= 1000);
    return numerosComoArray.reduce((total, num) => total + num, 0);
}
function obtenerDelimitadorYNumeros(cadena) {
  return cadena.startsWith("//") ?
    cadena.substring(2).split("\n") :
    [",", cadena];
}

function escapeCaracteresRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // // $& significa toda la cadena coincidente
}
export default sumarNumeros;