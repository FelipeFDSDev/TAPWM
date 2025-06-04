function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        resultadoDiv.textContent = 'Por favor, insira valores válidos para base e altura.';
        resultadoDiv.style.display = 'block';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#c62828';
        return;
    }

    const retangulo = new Retangulo(base, altura);
    const area = retangulo.calcularArea();
    
    resultadoDiv.innerHTML = `
        <p>Base: ${base}</p>
        <p>Altura: ${altura}</p>
        <p>Área do retângulo: <strong>${area}</strong></p>
    `;
    resultadoDiv.style.display = 'block';
    resultadoDiv.style.backgroundColor = '#e8f5e9';
    resultadoDiv.style.color = '#2c3e50';
}