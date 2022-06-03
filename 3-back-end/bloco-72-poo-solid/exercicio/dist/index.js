"use strict";
// Exercicios 1 e 2
class estudante {
    constructor(matricula, nome, prova1, prova2, prova3, prova4, trabalho1, trabalho2) {
        this.matricula = matricula;
        this.nome = nome;
        this.prova1 = prova1;
        this.prova2 = prova2;
        this.prova3 = prova3;
        this.prova4 = prova4;
        this.trabalho1 = trabalho1;
        this.trabalho2 = trabalho2;
    }
    sum() {
        return this.prova1 + this.prova2 + this.prova3 + this.prova4;
    }
    average() {
        return (this.prova1 + this.prova2 + this.prova3 + this.prova4) / 4;
    }
}
const est1 = new estudante(1, 'Ruan', 9, 8, 4, 7, 10, 9);
console.log("Soma das notas das provas");
console.log(est1.sum());
console.log("Média das provas");
console.log(est1.average());
// Exercicio 3 e 4
class Cliente {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome.length < 3) {
            throw new Error('Nome muito curto');
        }
        this._nome = novoNome;
    }
}
class Item {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome.length < 3) {
            throw new Error('Nome do item muito curto');
        }
        this._nome = novoNome;
    }
    get preco() {
        return this._preco;
    }
    set preco(novoPreco) {
        if (novoPreco <= 0) {
            throw new Error('Apenas valores positivos');
        }
        this._preco = novoPreco;
    }
}
class Pedido {
    constructor(cliente, itens, metodoPagamento) {
        this._desconto = 0;
        this._cliente = cliente;
        this._itens = itens;
        this._metodoPagamento = metodoPagamento;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(novoCliente) {
        this._cliente = novoCliente;
    }
    get itens() {
        return this._itens;
    }
    set itens(novosItens) {
        if (novosItens.length === 0) {
            throw new Error('O pedido deve constar pelo menos um item');
        }
        this._itens = novosItens;
    }
    get desconto() {
        return this._desconto;
    }
    set desconto(novoDesconto) {
        if (novoDesconto < 0) {
            throw new Error('O desconto deve ser positivo ou zero');
        }
        this._desconto = novoDesconto;
    }
    get metodoPagamento() {
        return this._metodoPagamento;
    }
    set metodoPagamento(novoMetodo) {
        this._metodoPagamento = novoMetodo;
    }
    total() {
        return this._itens.reduce((previousValue, item) => {
            const total = previousValue += item.preco;
            return total;
        }, 0);
    }
    totalComDesconto() {
        return this.total() * (1 - this._desconto);
    }
}
const cliente1 = new Cliente('Ruan');
const item1 = new Item('Misto quente', 5);
const item2 = new Item('Pizza', 25);
const pedido1 = new Pedido(cliente1, [item1, item2], "dinheiro");
console.log(`Pedido do cliente ${pedido1.cliente.nome}`);
console.log(pedido1.itens);
console.log('Total:');
console.log(pedido1.total());
console.log('Total com desconto:');
console.log(pedido1.totalComDesconto());
