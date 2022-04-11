const array = [2, 3, 4, 5, 6, 7];

console.log(array.reduce((total ,valor) => total + valor)); //Imprime a soma dos numeros do array: 27

/*
    array.map(callbackfn, valorInicial)

    callback(valorAcumulado, valorItem, index, array)
*/
let saldo = 1000;
const listaPrecos = [20, 100, 50, 230];

function comprar(listaPrecos, saldo) {
    return listaPrecos.reduce((valorAtual, valorItem) => valorAtual - valorItem, saldo);
}

saldo = comprar(listaPrecos, saldo);

console.log(saldo);