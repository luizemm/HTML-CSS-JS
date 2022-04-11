var ContaBancaria = require('./ContaBancaria.js');

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartao) {
        this._cartaoCredito = cartao;
    }
}

module.exports = ContaCorrente;