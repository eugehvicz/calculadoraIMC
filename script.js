const peso = document.getElementById("peso");
const imcForm = document.getElementById("imcForm");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
imcForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calcularIMC(peso.value, altura.value);
});
function calcularIMC(p, a) {
  const conta = p / (a*a);
  let classificacao = "";
  if (conta < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (conta <=24.9) {
    classificacao = "vnormal";
  } else if (conta <=29.9) {
    classificacao = "Sobre peso";
  } else if (conta <= 34.9) {
    classificacao = "Obesidade grau I";
  } else if (conta <= 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }
  resultado.textContent=`Seu peso é ${p}, sua altura é ${a}, e seu IMC é ${conta}, seu nível é ${classificacao}`

}

