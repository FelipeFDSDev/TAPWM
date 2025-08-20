document.addEventListener("DOMContentLoaded", function () {
  const textoInput = document.getElementById("meuTexto");
  const maiusculaRadio = document.getElementById("maiuscula");
  const minusculaRadio = document.getElementById("minuscula");
  const textoTransformado = document.getElementById("textoTransformado");

  textoInput.addEventListener("input", transformarTexto);
  maiusculaRadio.addEventListener("change", transformarTexto);
  minusculaRadio.addEventListener("change", transformarTexto);

  function transformarTexto() {
    const textoAtual = textoInput.value;

    if (maiusculaRadio.checked) {
      textoTransformado.textContent = textoAtual.toUpperCase();
    } else if (minusculaRadio.checked) {
      textoTransformado.textContent = textoAtual.toLowerCase();
    } else {
      textoTransformado.textContent = textoAtual;
    }
  }
});
