function sumarNumeros(cadena) {
  if (cadena === "") return 0;

 
  const [delimitador, numeros] = obtenerDelimitadorYNumeros(cadena);

    const numerosArray =numeros.split(delimitador)
    .map(Number)
    .filter(num => num <= 1000);
    return numerosArray.reduce((total, num) => total + num, 0);
}
function obtenerDelimitadorYNumeros(cadena) {
  return cadena.startsWith("//") ?
    cadena.substring(2).split("\n") :
    [",", cadena];
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
export default sumarNumeros;