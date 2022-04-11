const array = [2, 3, 4, 5, 6, 7];

console.log(array.map((item) => item * 2)); //imprime um novo array: [4, 6, 8, 10, 12, 14]
console.log(array.map((item) => item * this.value, {value: 3})); // Não funciona pq?????
console.log(array.map(function (item) {return item * this.value}, {value: 3})); // Funciona

/*
    array.map(callback, thisArgs)

    callback(valorItem, index, array)
*/