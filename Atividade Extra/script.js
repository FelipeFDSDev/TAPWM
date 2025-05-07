function soma() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

function quadrado() {
    let resultados = [];
    for (let i = 0; i < arguments.length; i++) {
        resultados.push(arguments[i] ** 2); 
    }
    return resultados;
}


function calcularSoma() {

    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let num3 = parseFloat(document.getElementById("n3").value);

    let numeros = [num1, num2, num3];

    alert("Soma: " + soma.apply(null, numeros));
}

function calcularQuadrado() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);

    let resultados = quadrado(num1, num2);

    alert("O quadrado do primeiro número é: " + resultados[0] + 
          "\nO quadrado do segundo número é: " + resultados[1]);
}

function gerarPalavras() {
    let input = document.getElementById("letras").value;
    let letras = input.split(",").map(l => l.trim().toLowerCase());

    if (letras.length !== 5 || letras.some(l => l.length !== 1 || !/[a-z]/.test(l))) {
        alert("Digite exatamente 5 letras válidas (de A a Z), separadas por vírgula.");
        return;
    }

    let palavras = [];

    while (palavras.length < 10) {
        let copia = [...letras];
        let palavra = "";

        while (copia.length > 0) {
            let index = Math.floor(Math.random() * copia.length);
            palavra += copia.splice(index, 1);
        }

        if (!palavras.includes(palavra)) {
            palavras.push(palavra);
        }
    }

    alert("10 palavras geradas:\n" + palavras.join(", "));
}




