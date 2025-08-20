
function validar() {
  let isValid = true;

 
  document
    .querySelectorAll(".error")
    .forEach((el) => (el.style.display = "none"));


  const nome = document.meuForm.elements["nome"];
  if (nome.value.length < 10) {
    document.getElementById("nomeError").style.display = "block";
    isValid = false;
  }


  const email = document.meuForm.elements["email"];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }


  const comentario = document.meuForm.elements["comentario"];
  if (comentario.value.length < 20) {
    document.getElementById("comentarioError").style.display = "block";
    isValid = false;
  }


  const pesquisa = document.meuForm.elements["pesquisa"];
  let pesquisaSelecionada = false;
  for (let i = 0; i < pesquisa.length; i++) {
    if (pesquisa[i].checked) {
      pesquisaSelecionada = true;
      break;
    }
  }

  if (!pesquisaSelecionada) {
    document.getElementById("pesquisaError").style.display = "block";
    isValid = false;
  }

  
  if (isValid) {
    const successMessage = document.getElementById("successMessage");

    
    for (let i = 0; i < pesquisa.length; i++) {
      if (pesquisa[i].checked) {
        if (pesquisa[i].value === "nao") {
          successMessage.textContent =
            "Que bom que você voltou a visitar esta página!";
        } else {
          successMessage.textContent = "Volte sempre à esta página!";
        }
        break;
      }
    }

    successMessage.style.display = "block";


    successMessage.scrollIntoView({ behavior: "smooth" });


    return false;
  }

  return false; 
}


document.getElementById("nome").addEventListener("input", function () {
  const count = this.value.length;
  document.getElementById(
    "nomeCharCount"
  ).textContent = `${count}/10 caracteres`;

  if (count >= 10) {
    document.getElementById("nomeError").style.display = "none";
  }
});

document.getElementById("comentario").addEventListener("input", function () {
  const count = this.value.length;
  document.getElementById(
    "comentarioCharCount"
  ).textContent = `${count}/20 caracteres`;

  if (count >= 20) {
    document.getElementById("comentarioError").style.display = "none";
  }
});


const radioButtons = document.querySelectorAll('input[name="pesquisa"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    document.getElementById("pesquisaError").style.display = "none";
  });
});
