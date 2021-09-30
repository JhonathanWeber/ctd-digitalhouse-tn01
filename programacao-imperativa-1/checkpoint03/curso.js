let listaEstudantes = require("./index");
let estudantes = require("./alunos");
//console.log(listaEstudantes);

/* Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.

Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não. */

let cursos = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 6,
    faltasMaxima: 3,
    listaEstudantes: listaEstudantes,
    alunoNovo:(aluno_, faltas_, notas_) => cursos.listaEstudantes.push(new estudantes.AddAluno(aluno_, faltas_, notas_)),
    aprovacao:(aluno_) => {
        if ((aluno_.calcularMedia() >= cursos.notaAprovacao) && (aluno_.faltas < cursos.faltasMaxima)) {
            return true;
        } else if ((aluno_.faltas === cursos.faltasMaxima) && (aluno_.calcularMedia() > cursos.notaAprovacao * 1.1)) {
            return true;
        } else {
            return false;
        }
    },
    resultados:() => {
        let lista = [];
        for (let estudante of cursos.listaEstudantes) {
            lista.push(cursos.aprovacao(estudante));
        }
        return lista;
    }
};


// cursos.alunoNovo("Patricia", 2, [3, 5, 9]);
// console.log(cursos.listaEstudantes);

//let msg = cursos.aprovacao(cursos.listaEstudantes[0]);
//console.log(msg);


//let listaTrueFalse = cursos.resultados();
//console.log(listaTrueFalse);


