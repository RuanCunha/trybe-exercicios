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


