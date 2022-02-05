const inquirer = require('inquirer')
const { somar, dividir, multiplicar, subtrair } = require('./operacoes')

inquirer.prompt([
    {
        type: 'list',
        name: 'op',
        message: 'Escolha uma das operações:',
        choices: [
            'Soma',
            'Subtração',
            'Divisão',
            'Multiplicação'
        ]
    },
    {
        name: 'n1',
        message: 'Digite o primeiro numero'
    },
    {
        name: 'n2',
        message: 'Digite o segundo numero'
    }
]).then( (answers) => {
    let op = answers.op
    let n1 = parseFloat(answers.n1)
    let n2 = parseFloat(answers.n2)

    resulOperacao = setTimeout ( () => {
        switch(op) {
            case 'Soma':
                somar(n1, n2)
            break
            case 'Subtração':
                subtrair(n1, n2)
            break
            case 'Divisão':
                dividir(n1, n2)
            break
            case 'Multiplicação':
                multiplicar(n1, n2)
            break                
        }
    })
}).catch( (err) => console.log(err) )