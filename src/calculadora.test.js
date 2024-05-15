import sumarNumeros from "./calculadora.js";

describe("Sumar números de cadena", () => {
  it("Debería devolver 0 para cadena vacía", () => {
    expect(sumarNumeros("")).toEqual(0);
  });

});

