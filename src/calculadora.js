function sumarNumeros(cadena) {
  if (cadena === "") return 0;

 
  const [delimitador, numeros] = cadena.startsWith("//") ?
    cadena.substring(2).split("\n") :
    [",", cadena];

    const numerosArray = numeros.split(new RegExp(escapeRegExp(delimitador), "g"))
    .map(Number)
    .filter(num => num <= 1000);
    return numerosArray.reduce((total, num) => total + num, 0);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
export default sumarNumeros;