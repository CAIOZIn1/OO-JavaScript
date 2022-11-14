import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 =  new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaCorrenteAlice = new ContaCorrente(cliente2, 102);
// contaCorrenteAlice.cliente = new Cliente()
// contaCorrenteAlice.cliente.nome = "Alice"
// contaCorrenteAlice.cliente.cpf = 88822233309
//por ser uma referência - o new Cliente - podemos passa-lo diretamnete no atributo cliente da contaCorrenteAlice
//não é a melhor prática, mesmo porque confunde o código e torna o mesmo muito maior e complexo

contaCorrenteRicardo.transferir(100, contaCorrenteAlice);

console.log(contaCorrenteRicardo); //estrutura toda funcionando
console.log(contaCorrenteAlice); //estrutura toda funcionando
console.log(contaCorrenteAlice.cliente) // visualizar como funciona o elemento get com o atributo privado
console.log(contaCorrenteAlice.saldo) // visualizar como funciona o elemento get com o atributo privado, mesmo com a tralha
console.log(cliente2.cpf) // visualizar como funciona o elemento get com o atributo privado