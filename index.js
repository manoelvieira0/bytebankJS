class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Manoel';
cliente1.cpf = 09433726405;
cliente1.agencia = 2049;
cliente1.saldo = 0;

cliente2.nome = 'Messia';
cliente2.cpf = 12840568426;
cliente2.agencia = 2049;
cliente2.saldo = 0;

console.log(cliente1, cliente2);

