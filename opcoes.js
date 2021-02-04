const perguntas = [
    {
        type: 'list',
        name: 'operacao',
        message: 'Que operação deseja realizar?',
        required: true,
        choices: [
            {
                name: 'somar',
                value: 0,
            },
            {
                name: 'subtrair',
                value: 1,
            },
            {
                name: 'multiplicar',
                value: 2,
            },
            {
                name: 'dividir',
                value: 3,
            }
        ]
    }
]

const soma = [
    {
        type: 'input',
        name: 'valor1',
        message: 'Digite o primeiro valor a ser calculado',
        required: true,
    },
    {
        type: 'input',
        name: 'valor2',
        message: 'Digite o segundo valor a ser calculado',
        required: true,
    }
]

const subtracao = [
    {
        type: 'input',
        name: 'valor1',
        message: 'Digite o primeiro valor a ser calculado',
        required: true,
    },
    {
        type: 'input',
        name: 'valor2',
        message: 'Digite o segundo valor a ser calculado',
        required: true,
    }
]

const multiplicacao = [
    {
        type: 'input',
        name: 'valor1',
        message: 'Digite o primeiro valor a ser calculado',
        required: true,
    },
    {
        type: 'input',
        name: 'valor2',
        message: 'Digite o segundo valor a ser calculado',
        required: true,
    }
]

const divisao = [
    {
        type: 'input',
        name: 'valor1',
        message: 'Digite o primeiro valor a ser calculado',
        required: true,
    },
    {
        type: 'input',
        name: 'valor2',
        message: 'Digite o segundo valor a ser calculado',
        required: true,
    }
]
module.exports = {
    perguntas,
    soma,
    subtracao,
    multiplicacao,
    divisao
}