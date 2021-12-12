const listaDePessoas = [
    {
        id: 1,
        nome: 'Michael Jordan',
        dtNasciento: '19/11/1192',
        telefone: '(21) 98816-4029',
    },
    {
        id: 2,
        nome: 'Michael Phelps',
        dtNasciento: '11/01/1190',
        telefone: '(21) 98816-4029',
    },
    {
        id: 3,
        nome: 'Serena Williams',
        dtNasciento: '09/08/1195',
        telefone: '(21) 98816-4029',
    },
    {
        id: 4,
        nome: 'Simone Biles',
        dtNasciento: '09/04/1988',
        telefone: '(21) 98816-4029',
    },
    {
        id: 5,
        nome: 'Tom Brady',
        dtNasciento: '15/12/1190',
        telefone: '(21) 98816-4029',
    },
    {
        id: 6,
        nome: 'Anderson Silva',
        dtNasciento: '25/10/1981',
        telefone: '(21) 98816-4029',
    }
]

//Criando tabela a partir de uma lista
class Tabela {
    constructor(tbody) {
        this.tbody = document.querySelector(tbody)
    }
    
    criarTabela(pessoa) {
 
        //criando elementos de tabela
        let linha = document.createElement("tr")
        let identificador = document.createElement('td')
        let nome = document.createElement('td')
        let nascimento = document.createElement('td')
        let tel = document.createElement('td')
        
        //criando texto
        let txt_identificador = document.createTextNode(pessoa.id)
        let txt_nome = document.createTextNode(pessoa.nome)
        let txt_nascimento = document.createTextNode(pessoa.dtNasciento)
        let txt_tel = document.createTextNode(pessoa.telefone)
    
        //adicionando texto nos elementos
        identificador.appendChild(txt_identificador)
        nome.appendChild(txt_nome)
        nascimento.appendChild(txt_nascimento)
        tel.appendChild(txt_tel)
        linha.appendChild(identificador)
        linha.appendChild(nome)
        linha.appendChild(nascimento)
        linha.appendChild(tel)

        //Adicionando cor nas linhas
        if(pessoa.id % 2 === 0) {
            linha.classList.add('linhaAzul')
            linha.style.backgroundColor = '#6366F1'
        } else {
            linha.classList.add('outroAzul')
            linha.style.backgroundColor = '#2BA47D'
        }


        this.tbody.appendChild(linha) 
    }
}

const lista = new Tabela('tbody')

listaDePessoas.forEach(pessoa => lista.criarTabela(pessoa))


//Adicionando pessoas a lista
const btnAdicionar = document.querySelector('#btn')

btnAdicionar.onclick = function() {

    //armazenando dados de novo aluno
    let id =  listaDePessoas.length + 1
    let nome = document.querySelector('#nome').value
    let nascimento = document.querySelector('#nascimento').value
    let telefone = document.querySelector('#tel').value

    //adicionando novo objeto no array
    listaDePessoas.push({
        id: id,
        nome: nome,
        dtNasciento: nascimento,
        telefone: telefone,
    })

    //obtendo o último objeto da minha lista
    let ultimaPessoa = listaDePessoas[listaDePessoas.length - 1]

    //adicionando o objeto na lista criada
    return lista.criarTabela(ultimaPessoa)
}