export default class ContaCorrente {
    agencia;
    //a convesão para atributos privado é o _, ou seja, no nosso caso deveriamos utilizar _saldo. Não usei porque o meu não deu "erro" :^)
    #saldo = 200;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        } else {
            console.log('Impossível realizar a operação, pois você está tentando sacar mais do que o seu saldo total.');
        }
    }

    depositar(valor) {
        if (valor > 0) return //-> para evitar muitos if's. Evitar uma identação muito alta
        this.#saldo += valor;
        // console.log(this.#saldo)
        //só consigo acessa-lo dentro da classe já que o mesmo é um atribubo privado pelo uso da tralha (#) antes da variável
    }
}