let nome = prompt("Qual é o seu nome?");
let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));
let nota3 = parseFloat(prompt("Informe a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

alert("As notas iformadas foram:"+ nota1 + ", " + nota2 + " e " + nota3 +"\n\nSeu nome é " + nome + " e a média das suas notas é: " + media.toFixed(2));
