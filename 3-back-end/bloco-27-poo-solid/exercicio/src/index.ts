// Exercicios 1 e 2
class estudante {
  matricula: number;
  nome: string;
  prova1: number;
  prova2: number;
  prova3: number;
  prova4: number;
  trabalho1: number;
  trabalho2: number;

  constructor ( matricula: number, nome: string, prova1: number, prova2: number, prova3: number, prova4: number, trabalho1: number, trabalho2: number) {
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

const est1 = new estudante(1, 'Ruan', 9, 8, 4, 7, 10, 9)
console.log("Soma das notas das provas");
console.log(est1.sum());
console.log("Média das provas");
console.log(est1.average());

// Exercicio 3 e 4

class Cliente {
  private _nome: string;

  constructor (nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    if (novoNome.length < 3) {
      throw new Error('Nome muito curto')
    }
    this._nome = novoNome
  }
}

class Item {
  private _nome: string;
  private _preco: number;

  constructor (nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome
  }

  set nome(novoNome: string) {
    if (novoNome.length < 3) {
      throw new Error('Nome do item muito curto')
    }
    this._nome = novoNome
  }

  get preco(): number {
    return this._preco;
  }

  set preco(novoPreco: number) {
    if (novoPreco <= 0) {
      throw new Error('Apenas valores positivos')
    }
    this._preco = novoPreco
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itens: Item[];
  private _desconto = 0;
  private _metodoPagamento: "crédito" | "débito" | "dinheiro";

  constructor (cliente: Cliente, itens: Item[], metodoPagamento: "crédito" | "débito" | "dinheiro") {
    this._cliente = cliente;
    this._itens = itens;
    this._metodoPagamento = metodoPagamento;
  }

  get cliente(): Cliente {
    return this._cliente
  }

  set cliente(novoCliente) {
    this._cliente = novoCliente
  }

  get itens(): Item[] {
    return this._itens
  }

  set itens(novosItens: Item[]) {
    if (novosItens.length === 0) {
      throw new Error('O pedido deve constar pelo menos um item')
    }
    this._itens = novosItens
  }

  get desconto(): number {
    return this._desconto
  }

  set desconto(novoDesconto) {
    if (novoDesconto < 0) {
      throw new Error('O desconto deve ser positivo ou zero')
    }
    this._desconto = novoDesconto
  }

  get metodoPagamento(): "crédito" | "débito" | "dinheiro" {
    return this._metodoPagamento
  }

  set metodoPagamento(novoMetodo: "crédito" | "débito" | "dinheiro") {
    this._metodoPagamento = novoMetodo
  }

  total(): number {
    return this._itens.reduce((previousValue, item) => {
      const total = previousValue += item.preco;
      return total;
    }, 0)
  }

  totalComDesconto(): number {
    return this.total() * (1 - this._desconto)
  }
}

const cliente1 = new Cliente('Ruan')
const item1 = new Item('Misto quente', 5)
const item2 = new Item('Pizza', 25)
const pedido1 = new Pedido(cliente1, [item1, item2], "dinheiro")

console.log(`Pedido do cliente ${pedido1.cliente.nome}`);
console.log(pedido1.itens);
console.log('Total:');
console.log(pedido1.total());
console.log('Total com desconto:');
console.log(pedido1.totalComDesconto());




