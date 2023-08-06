function calcular(event) {
  event.preventDefault();

  const alcoolInput = document.getElementById("alcool").value;
  const gasolinaInput = document.getElementById("gasolina").value;
  const contentResult = document.getElementById("content-result");
  const textResult = document.getElementById("text-result");

  const gasolinaSpan = document.getElementById("gasolina-result");
  const alcoolSpan = document.getElementById("alcool-result");

  const calculo = alcoolInput / gasolinaInput;

  if (calculo < 0.7) {
    textResult.innerHTML = "Compensa usar Àlcool";
  } else {
    textResult.innerHTML = "Compensa usar Gasolina";
  }

  gasolinaSpan.innerHTML = `Gasolina R$ ${gasolinaInput}`;
  alcoolSpan.innerHTML = `Àlcool R$ ${alcoolInput}`;

  contentResult.classList.remove("hide");
}
