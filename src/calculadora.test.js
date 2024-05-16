import sumarNumeros from "./calculadora.js";

describe("Sumar números de cadena", () => {
  it("Debería devolver 0 para cadena vacía", () => {
    expect(sumarNumeros("")).toEqual(0);
  });

  it("Debería devolver el número mismo para una cadena con un solo número", () => {
    expect(sumarNumeros("2")).toEqual(2);
  });

  it("Debería devolver la suma de dos números para una cadena con dos números separados por coma", () => {
    expect(sumarNumeros("1,2")).toEqual(3);
  });

  
  it("Debería devolver la suma de varios números para una cadena con varios números separados por coma", () => {
    expect(sumarNumeros("1,2,3")).toEqual(6);
  });
  it("Debería devolver la suma de varios números con delimitador personalizado", () => {
    expect(sumarNumeros("//*\n1*2*3")).toEqual(6);
    expect(sumarNumeros("//;\n6;7;4")).toEqual(17);
    expect(sumarNumeros("//;\n6;3;1")).toEqual(10);
  });
  it("Debería ignorar los números mayores a 1000", () => {
    expect(sumarNumeros("2,1001")).toEqual(2);
    expect(sumarNumeros("//;\n6;1001;1")).toEqual(7);
  });

});

