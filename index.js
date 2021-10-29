class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Manoel';
cliente1.cpf = 09433726405;

const contaCorrenteManoel = new ContaCorrente();
contaCorrenteManoel.agencia = 2049;
contaCorrenteManoel.saldo = 100;
console.log(contaCorrenteManoel.saldo);
contaCorrenteManoel.sacar(75);
console.log(contaCorrenteManoel.saldo);

const cliente2 = new Cliente();
cliente2.nome = 'Messia';
cliente2.cpf = 12840568426;

console.log(cliente1, cliente2);

