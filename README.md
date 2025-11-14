# PruebasUnitarias

@author: Abraham Martínez Cerón

## .toEqual()

Compara todas las propiedades de un objeto, utiliza `Object.is` para comparar los objetos, es mejor que sólo utilizar `===`. 

## .toBeTruthy()

Checa si cierto valor es verdadero en un contexto. No necesariamente tiene que ser booleano `true`, pero todo lo que no sea `false`, `0`, `''`, `null`, `undefined` y `NaN` se considera como verdadero. 

## .toBeFalsy()

Tiene el contexto contrario a `.toBeTruthy()`, por lo que si alguno de los seis valores aparece, entoncese considera falso en ese contexto.

## .toBeNull()

Permite checar si un valor esperado es nulo, tiene un mensaje más claro que utilizar .`toBe(null)`. 

## .toBeUndefined()

Checa si una variable es `undefined`, al igual que `.toBeNull`, nos permite tener mucha más claridad que simplemente usar `.toBe(null)`.

## .toThrow()

Checa si una función lanza excepciones cuando se llama, es necesario poner la llamada dentro de una función para que el error sea atrapado. Se pueden usar argumentos adicionales para indicar con expresiones regulares que busque un mensaje, una subcadena, si es un mensaje de un objeto, o si es instancia de una clase

## .toStrictEqual(value)

Compara dos objetos y checa que sean iguales en tipo y estructura. Como tomar en cuenta valores `undefined`, llaves con valores `undefined`, menos datos en listas, y los tipos de los objetos, como clases o literales

## Referencias

JEST. (s.f.) _Expect_. [Jest](https://jestjs.io/docs/expect#tostrictequalvalue)