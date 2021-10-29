import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contaCorrenteManoel = new ContaCorrente();
contaCorrenteManoel.cliente = new Cliente();
contaCorrenteManoel.agencia = 2049;
contaCorrenteManoel.cliente.nome = 'Manoel';
contaCorrenteManoel.cliente.cpf = 59433726405;

const contaCorrenteMessia = new ContaCorrente();
contaCorrenteMessia.cliente = new Cliente();
contaCorrenteMessia.agencia = 2049;
contaCorrenteMessia.cliente.nome = 'Messia';
contaCorrenteMessia.cliente.cpf = 17563586540;

console.log(contaCorrenteManoel);
console.log(contaCorrenteMessia);





