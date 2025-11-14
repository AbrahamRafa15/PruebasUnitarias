function regresaObjeto(prop1, prop2) {
    return {
        "tacos": prop1,
        "refresco": prop2
    }
}

function checarBool(bool) {
    return bool === 1;
}

function checarNull(objeto) {
    return objeto === 0 ? null : 1;
}

function checarUndefined(objeto) {
    return objeto === 0 ? undefined : 1;
}

function dividir (a, b){
    if (b === 0){
        throw new Error("No se puede dividir entre cero");
    }
    return a/b;
}

module.exports = { regresaObjeto, checarBool, checarNull, checarUndefined, dividir }