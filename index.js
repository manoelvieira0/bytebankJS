class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<=0){
            return;
        } this._saldo += valor
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Manoel';
cliente1.cpf = 09433726405;

const contaCorrenteManoel = new ContaCorrente();
contaCorrenteManoel.agencia = 2049;
contaCorrenteManoel.depositar(100);
const valorSacado = contaCorrenteManoel.sacar(50);
console.log(valorSacado);

const cliente2 = new Cliente();
cliente2.nome = 'Messia';
cliente2.cpf = 12840568426;

console.log(contaCorrenteManoel);


