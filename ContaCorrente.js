import Cliente from './Cliente.js'

export default class ContaCorrente {
    static numeroDeContas = 0 // -> o atributo static serve para referenciar que o estado não é único de apenas um obejto e sim do escopo todo
    agencia;
    _cliente;
    #saldo = 200;
    //a convesão para atributos privado é o _, ou seja, no nosso caso deveriamos utilizar _saldo. Não usei porque o meu não deu "erro" :^)

    set cliente (novoValor) {
        if  (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    } //-> usado para "setar", ou seja, inserir uma informação em um atributo privado

    get cliente() {
        return this._cliente
    } //-> ele retorna até mesmo atributos privados com a tralha - # -
    

    get saldo () {
        return this.#saldo
    }

    constructor (cliente, agencia) {
        this.cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        } else {
            console.log('Impossível realizar a operação, pois você está tentando sacar mais do que o seu saldo total.');
        }
    }

    depositar(valor) {
        if (valor < 0) return; //-> para evitar muitos if's. Evitar uma identação muito alta
        this.#saldo += valor;
        // console.log(this.saldo)
        //só consigo acessa-lo dentro da classe já que o mesmo é um atribubo privado pelo uso da tralha (#) antes da variável
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}