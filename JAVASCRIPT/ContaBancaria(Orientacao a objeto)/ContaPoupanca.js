var ContaBancaria = require('./ContaBancaria.js');

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this._tipo = 'poupanca';
    }
}

module.exports = ContaPoupanca;