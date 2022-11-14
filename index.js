import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 102;
contaCorrenteAlice.cliente = new Cliente()
//por ser uma referência - o new Cliente - podemos passa-lo diretamnete no atributo cliente da contaCorrenteAlice
contaCorrenteAlice.cliente.nome = "Alice"
contaCorrenteAlice.cliente.cpf = 88822233309

contaCorrenteRicardo.transferir(100, contaCorrenteAlice)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)