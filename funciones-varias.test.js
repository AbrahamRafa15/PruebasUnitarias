const { regresaObjeto, checarBool, checarNull, checarUndefined, dividir } = require("./funciones-varias.js");

test ("Prueba de .toEqual", () => {
    expect(regresaObjeto("asada", "Fanta")).toEqual(regresaObjeto("asada", "Fanta"));
});

test ("Prueba .toBeTruthy", () => {
   expect(checarBool(1)).toBeTruthy(); 
});

test ("Prueba .toBeFalsy", () => {
    expect(checarBool(0)).toBeFalsy();
});

test ("Prueba .toBeNull", () => {
    expect(checarNull(0)).toBeNull();
});

test ("Prueba .toBeUndefined", () => {
    expect(checarUndefined(0)).toBeUndefined();
});

test("Prueba .toThrow", () => {
    expect(() => {
        dividir(10,0);
    }).toThrow();
});

test("Prueba .toStrictEqual", () => {
    expect(regresaObjeto(5,2)).toStrictEqual(regresaObjeto(5,2));
});