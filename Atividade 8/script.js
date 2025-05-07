VerificarMaior = () =>{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    let numeros = [num1, num2, num3];

    result = Math.max(...numeros);

    alert("O maior número encontrado foi: " + result);

}

OrdemCres = () =>{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    let numeros = [num1, num2, num3];

    maior = Math.max(...numeros);

    menor = Math.min(...numeros);

    numeros.splice(numeros.indexOf(maior),1);

    numeros.splice(numeros.indexOf(menor),1);

    console.log(numeros);

    alert("A ordem é: " + "\n"+(menor) + "\n" +  numeros +  "\n"+ (maior));

}

function ehPalindromo(str) {
    let limpaStr = str.toLowerCase().replace(/\s/g, '');
    let invertida = limpaStr.split('').reverse().join('');
    return limpaStr === invertida;
}

function Palindromo() {
    let texto = document.getElementById('texto').value;
    let resultado = ehPalindromo(texto) ? "É um palíndromo!" : "Não é um palíndromo.";

    alert(resultado);
}


function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "Erro";
    }

    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();

    return palavra1.includes(palavra2) ? "É um subconjunto" : "Não é um subconjunto";
}

function SubConjunto() {
    let p1 = document.getElementById('palavra1').value;
    let p2 = document.getElementById('palavra2').value;

    let resultado = verificarSubconjunto(p1, p2);
    alert(resultado);
}