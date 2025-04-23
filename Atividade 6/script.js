let idadeArray = [];
let opiniao1 = 0; // péssimo
let opiniao2 = 0; // regular
let opiniao3 = 0; // bom
let opiniao4 = 0; // ótimo

let mas = 0, fem = 0, out = 0;
let respostasColetadas = 0;
const limite = 45;

function registrar() {
    if (respostasColetadas >= limite) {
        alert("Limite de 45 respostas atingido.");
        return;
    }

    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);

    if (!idade || idade <= 0) {
        alert("Informe uma idade válida.");
        return;
    }

    idadeArray.push(idade);
    respostasColetadas++;

    // Contar opinião
    if (opiniao === 1) opiniao1++;
    else if (opiniao === 2) opiniao2++;
    else if (opiniao === 3) opiniao3++;
    else opiniao4++;

    // Contar sexo
    if (sexo === "mas") mas++;
    else if (sexo === "fem") fem++;
    else out++;

    // Limpar o formulário
    document.getElementById("idade").value = '';
}

function finalizar() {
    if (respostasColetadas === 0) {
        alert("Nenhuma resposta registrada.");
        return;
    }

    // Soma das idades
    let soma = 0;
    let maisVelho = idadeArray[0];
    let maisNovo = idadeArray[0];

    for (let i = 0; i < idadeArray.length; i++) {
        soma += idadeArray[i];
        if (idadeArray[i] > maisVelho) maisVelho = idadeArray[i];
        if (idadeArray[i] < maisNovo) maisNovo = idadeArray[i];
    }

    let media = (soma / idadeArray.length).toFixed(2);
    let otimo = opiniao4;
    let bom = opiniao3;
    let porcentagemOtimo = ((otimo / idadeArray.length) * 100).toFixed(2);
    let porcentagemBom = ((bom / idadeArray.length) * 100).toFixed(2);


    // Exibir resultados
    document.getElementById("resultado").innerHTML = `
        <h2>Resultado da Pesquisa</h2>
        <p><strong>Média das idades:</strong> ${media}</p>
        <p><strong>Mais velho:</strong> ${maisVelho}</p>
        <p><strong>Mais novo:</strong> ${maisNovo}</p>
        <p><strong>Quantidade que respondeu Péssimo:</strong> ${opiniao1}</p>
        <p><strong>Porcentagem que respondeu Ótimo:</strong> ${porcentagemOtimo}%</p>
        <p><strong>Porcentagem que respondeu Bom:</strong> ${porcentagemBom}%</p>
        <p><strong>Total Masculino:</strong> ${mas}</p>
        <p><strong>Total Feminino:</strong> ${fem}</p>
        <p><strong>Total Outros:</strong> ${out}</p>
    `;
}
