//Primeira maneira cujo desenvolvi a solução, criando um objeto a partir do OBject onde todos os objetos "derivam" dele de alguma forma
let funcionario = new Object();

funcionario.matricula = "009865132675";
funcionario.nome = "Felipe Ferreira De Souza";
funcionario.funcao = "Analista de Dados";

console.log(funcionario);

//Segunda maneira de criar um objeto, maneira literal
let funcionario1 = {};

funcionario1.matricula = "009865132675";
funcionario1.nome = "Felipe Ferreira De Souza";
funcionario1.funcao = "Analista de Dados";

console.log(funcionario1);

//Terceira maneira de criar um objeto, utlizando função constutora

function funcionario2(matricula, nome, funcao,) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;

  this.MostrarDados = function (){
    return "Matrícula: " + this.matricula + "Nome: " + this.nome + 
    "Função: " + this.funcao
  }
}

//Criando um obejto a partir da função criada acima 
let Felipe = new funcionario2("009865132675", "009865132675","Analista de Dados")

console.log(Felipe.MostrarDados());
