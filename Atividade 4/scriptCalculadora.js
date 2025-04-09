alert("Seja bem-vindo à calculadora com JS");

function Obter_Valor() {
    let valor1 = parseFloat(document.getElementById("n1").value);
    let valor2 = parseFloat(document.getElementById("n2").value);

    let resultSoma = valor1 + valor2;
    let resultSub = valor1 - valor2;
    let resultMult = valor1 * valor2;
    let resultDiv = valor1 / valor2;

    document.getElementById("resultado").innerHTML = `
        Soma: ${resultSoma} <br>
        Subtração: ${resultSub} <br>
        Multiplicação: ${resultMult} <br>
        Divisão: ${resultDiv}
    `;
}
