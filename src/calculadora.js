function sumarNumeros(cadena) {
  if (cadena === "") return 0;
  return cadena
    .split(",")
    .reduce((total, num) => total + parseInt(num), 0);
  
}

export default sumarNumeros;