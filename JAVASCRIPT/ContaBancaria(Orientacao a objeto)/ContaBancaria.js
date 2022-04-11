class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor <= 0) throw new Error('Erro ao Sacar(Deve ser maior que 0)');
        if(valor > this._saldo) throw new Error('Saldo insuficiente');
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor) {
        if(valor <= 0) throw new Error('Erro ao depositar(Deve ser maior que 0)');
        this._saldo += valor;

        return this._saldo;
    }
}

module.exports = ContaBancaria;