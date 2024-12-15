var numero1 = document.querySelector("#numero1")
var numero2 = document.querySelector("#numero2")
var btnSoma = document.querySelector("#btnSoma")
var btnDivisao = document.querySelector("#btnDivisao")
var btnMiltiplicacao = document.querySelector("#btnMultiplicacao")
var btnSubtracao = document.querySelector("#btnSubtracao")

btnSoma.addEventListener("click",somar)
btnDivisao.addEventListener("click", dividir)
btnSubtracao.addEventListener("click", subtrair)
btnMiltiplicacao.addEventListener("click", multiplicar)

btnDivisao.addEventListener("click",dividir)

btnMiltiplicacao.addEventListener("click",multiplicar)

btnSubtracao.addEventListener("click",subtrair)

function somar(){
    res.innerText = Number(numero1.value) + Number(numero2.value)
}
function dividir() {
    res.innerText = Number(numero1.value) / Number(numero2.value)

}
function subtrair() {
    res.innerText = Number(numero1.value) - Number(numero2.value)
}
function multiplicar() {
    res.innerText = Number(numero1.value) * Number(numero2.value)
}