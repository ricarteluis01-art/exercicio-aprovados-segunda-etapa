
// determina aprovados para a segunda etapa

function primeiraEtapa(acertoProva, semCursado) {
    const NumQuestoes = 20;
    const NotaMinima = 0.7;
    const QtdeSemestres = 3;

    let nota = acertoProva / NumQuestoes;

    console.log(nota);

    if (nota >= NotaMinima && semCursado <= QtdeSemestres) {
        return "Aprovado para a segunda etapa";
    } else {
        return "Reprovado para a segunda etapa";
    }
}

console.log(primeiraEtapa(14, 2));

