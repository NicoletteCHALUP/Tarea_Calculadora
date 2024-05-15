function sumarNumeros(cadena) {
  if (cadena === "") return 0;
  return cadena
  .split(",")
  .map(Number)
  .reduce((total, num) => total + (isNaN(num) ? 0 : num), 0);
  
}

export default sumarNumeros;