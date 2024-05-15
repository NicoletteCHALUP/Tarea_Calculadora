function sumarNumeros(cadena) {
  if (cadena === "") return 0;
    return cadena.split(",").reduce((total, num) => {
      const parsedNum = parseInt(num);
      return isNaN(parsedNum) ? total : total + parsedNum;}, 0);
  
}

export default sumarNumeros;