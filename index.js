const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require ('./dividir');
const inquirer = require('inquirer');
const {perguntas, soma, subtracao, multiplicacao, divisao} = require('./opcoes');

inquirer.prompt(perguntas).then(respostas => {
    const operacao = respostas.operacao


if (operacao === 0) {
    inquirer.prompt(soma).then(resultado =>{
        (soma.valor1, soma.valor2)
        console.log(somar(parseFloat(resultado.valor1), parseFloat(resultado.valor2)))
    })
}

if (operacao === 1) {
    inquirer.prompt(subtracao).then(resultado =>{
        (subtracao.valor1, subtracao.valor2)
        console.log(subtrair(parseFloat(resultado.valor1), parseFloat(resultado.valor2)))
    })
}

if (operacao === 2) {
    inquirer.prompt(multiplicacao).then(resultado =>{
        (multiplicacao.valor1, multiplicacao.valor2)
        console.log(multiplicar(parseFloat(resultado.valor1), parseFloat(resultado.valor2)))
    })
}
if (operacao === 3) {
    inquirer.prompt(divisao).then(resultado =>{
        (divisao.valor1, divisao.valor2)
        console.log(dividir(parseFloat(resultado.valor1), parseFloat(resultado.valor2)))
    })
}

})

