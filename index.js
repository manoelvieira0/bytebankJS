import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Manoel';
cliente1.cpf = 9433726405;

const contaCorrenteManoel = new ContaCorrente();
contaCorrenteManoel.agencia = 2049;
contaCorrenteManoel.cliente = cliente1;

contaCorrenteManoel.depositar(500);

const cliente2 = new Cliente();
cliente2.nome = 'Messia';
cliente2.cpf = 12840568426;

const contaCorrenteMessia = new ContaCorrente();
contaCorrenteMessia.agencia = 2049;
contaCorrenteMessia.cliente = cliente2;

contaCorrenteManoel.transferir(200, contaCorrenteMessia);

console.log(contaCorrenteManoel);
console.log(contaCorrenteMessia);





