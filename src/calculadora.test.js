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


});

