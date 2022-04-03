// Tipo Set é uma lista que possui somente valores unicos

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set(array);

    return [...mySet];
}

console.log(valoresUnicos(array));