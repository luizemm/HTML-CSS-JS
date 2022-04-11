var ContaBancaria = require('./ContaBancaria.js');
var ContaCorrente = require('./ContaCorrente.js');
var ContaPoupanca = require('./ContaPoupanca.js');
var ContaUniversitaria = require('./ContaUniversitaria.js');

function main(){
    try {
        let conta = new ContaUniversitaria(1,1);

        conta.depositar(1);
        conta.sacar(2);
        console.log(conta.saldo);
    } catch (error) {
        console.log(error.message);
    }
}

main();
