let estudantes = require("./alunos");

let aluno001 = new estudantes.AddAluno("Alice", 2, [4.5, 7, 9]);
let aluno002 = new estudantes.AddAluno("Bob", 4, [3, 6.5, 8]);
let aluno003 = new estudantes.AddAluno("Joice", 1, [5, 7, 8]);
let aluno004 = new estudantes.AddAluno("Laura", 5, [3.5, 4.7, 6]);
let aluno005 = new estudantes.AddAluno("Carlos", 0, [6, 7, 8]);

console.log(aluno001);
console.log(aluno001.calcularMedia());
console.log(aluno001.calcularFaltas());

let listaEstudantes = [aluno001, aluno002, aluno003, aluno004, aluno005];
//console.log(listaEstudantes);

module.exports = listaEstudantes;

//console.log(curso001);