/* 
Checkpoint 3

Passo 1

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno */


let Alunos = require("./alunos")

let alunosC = new Alunos("Jhonathan", 3, [3.8,9.8]);

console.log(alunosC);