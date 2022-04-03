function verificaTamanho(array, tamArray) {
    try {
        if(!array) throw new ReferenceError('Array não informado!');
        if(!tamArray) throw new ReferenceError('Tamanho do array não informado!');

        if(typeof array !== 'object') throw new TypeError('Array não é do tipo Object');
        if(typeof tamArray !== 'number') throw new TypeError('tamanho do array não é do tipo Number');

        if(array.length !== tamArray) throw new RangeError('Tamanho do array é diferente do numero informado');

        return array;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este é um ReferenceError");
        } else if(error instanceof TypeError){
            console.log("Este é um TypeError");
        } else if(error instanceof RangeError){
            console.log("Este é um RangeError");
        } else {
            console.log("Erro inesperado");
        }
        return error.message;
    }
}

console.log(verificaTamanho([1,2,3,4,5], 4));

