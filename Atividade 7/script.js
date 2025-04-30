function verificarTriangulo() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Informe valores numéricos válidos e maiores que zero.");
        return;
    }


    if (Math.abs(b - c) < a && a < b + c &&
        Math.abs(a - c) < b && b < a + c &&
        Math.abs(a - b) < c && c < a + b) {

        let tipo = '';

        if (a === b && b === c) {
            tipo = 'Equilátero';
        } else if (a === b || b === c || a === c) {
            tipo = 'Isósceles';
        } else {
            tipo = 'Escaleno';
        }

        resultado.innerHTML = `
            <h2>Resultado</h2>
            <p>Os valores informados formam um triângulo <strong>${tipo}</strong>.</p>
        `;
    } else {
        resultado.innerHTML = `
            <h2>Resultado</h2>
            <p>Os valores informados <strong>não formam</strong> um triângulo.</p>
        `;
    }

    // Limpar campos
    document.getElementById('ladoA').value = '';
    document.getElementById('ladoB').value = '';
    document.getElementById('ladoC').value = '';
}
