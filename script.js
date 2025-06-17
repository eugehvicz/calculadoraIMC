const peso = document.getElementById("peso")
const imcForm = document.getElementById("imcForm")
const altura = document.getElementById("altura")
const resultado = document.getElementById("resultado")
imcForm.addEventListener('submit', function(event) {
   event.preventDefault();
   calcularIMC(peso, altura) 
})
function calcularIMC(p, a){
    const conta = p/(a*a);

}