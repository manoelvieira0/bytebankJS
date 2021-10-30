import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Manoel', 94337264058);
const cliente2 = new Cliente('Messia', 54862593054);

const contaCorrenteManoel = new ContaCorrente(2049, cliente1);
const contaCorrenteMessia = new ContaCorrente(2049, cliente2);

console.log(contaCorrenteManoel);
console.log(contaCorrenteMessia);
console.log(ContaCorrente.numeroDeContas);




