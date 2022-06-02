"use strict";
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
