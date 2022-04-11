var ContaBancaria = require('./ContaBancaria.js');

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this._tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500) throw new Error('Valor deve ser menor que 500');

        return super.sacar(valor);
    }
}

module.exports = ContaUniversitaria;