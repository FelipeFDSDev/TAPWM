function formatarAltura(input) {
    // Remove tudo que não é número
    let valor = input.value.replace(/\D/g, '');
    
    // Se o valor for maior que 3 dígitos, assume que está em cm e converte para metros
    if (valor.length > 3) {
        valor = (parseInt(valor) / 100).toString();
    } else if (valor.length > 1) {
        // Se tiver 2 ou 3 dígitos, assume que é em metros e adiciona o ponto decimal
        valor = valor.substring(0, 1) + '.' + valor.substring(1);
    }
    
    input.value = valor;
}

function calcularIMC() {
    let alturaInput = document.getElementById("altura");
    let alturaValor = alturaInput.value;
    
    // Converte para número, tratando tanto 1.75 quanto 175 como entrada válida
    let altura;
    if (alturaValor.includes('.')) {
        altura = parseFloat(alturaValor);
    } else {
        // Se não tem ponto decimal, assume que está em cm
        altura = parseInt(alturaValor) / 100;
    }

    const peso = parseFloat(document.getElementById("peso").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(altura) || isNaN(peso) || altura <= 0.1 || altura > 2.5 || peso <= 0 || peso > 300) {
        resultadoDiv.textContent = "Por favor, insira valores válidos:\n- Altura entre 0.1m e 2.5m\n- Peso entre 1kg e 300kg";
        resultadoDiv.style.display = "block";
        resultadoDiv.style.backgroundColor = "#ffebee";
        resultadoDiv.style.color = "#c62828";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    
    let classificacao = "";
    let corFundo = "";
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        corFundo = "#fff3e0";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        corFundo = "#e8f5e9";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        corFundo = "#fff3e0";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
        corFundo = "#ffebee";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
        corFundo = "#ffcdd2";
    } else {
        classificacao = "Obesidade Grau III";
        corFundo = "#ef9a9a";
    }
    
    resultadoDiv.innerHTML = `
        <p>Seu IMC é: <strong>${imcFormatado}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
    `;
    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = corFundo;
    resultadoDiv.style.color = "#2c3e50";
}