/**
 * criar um programa para armazenar as notas dos alunos de uma turma, fazer a média dessa nota, onde,
 * a nota minima é 5, e, se turma tiver uma nota maior, enviar uma mensagem de parabéns
 */

let turmaA = [
    {
        nomeDoAluno: "James",
        notaDoAluno: 8.1
    },
    {
        nomeDoAluno: "Juliane",
        notaDoAluno: 7.7
    },
    {
        nomeDoAluno: "Gugu",
        notaDoAluno: 10
    },
    {
        nomeDoAluno: "Amana",
        notaDoAluno: 7.9
    },
]

let turmaB = [
    {
        nomeDoAluno: "Moisés",
        notaDoAluno: 8.9
    },
    {
        nomeDoAluno: "Juliano",
        notaAluno02: 7.9
    },
    {
        nomeDoAluno: "Gugringe",
        notaAluno02: 5.7
    },
    {
        nomeDoAluno: "Amanildo",
        notaAluno02: 7
    },
]

let mediaDaTurmaA = 0;
let mediaDaTurmaB = 0;

/*
for(let indexDaTurma = 0; indexDaTurma < turmaA.length; indexDaTurma++) {
    // mediaDaTurmaA = mediaDaTurmaA + turmaA[indexDaTurma].notaDoAluno
    
}
*/

turmaA.push({
    nomeDoAluno: "João Gordo",
    notaDoAluno: 10
})

console.log(turmaA)
// let mediaDaTurma = (notaAluno01 + notaAluno02 + notaAluno03 + notaAluno04) / 4

// refatorar após ver oconteúdo de funcão
/*
if(mediaDaTurmaA / 4 > 5) {
    console.log("Parabens")
}
*/