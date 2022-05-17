//INTERFACE
//Interface é como se fosse um contrato.

interface Humano{
    nome: string
    idade?: number //É OPCIONAL
    [prop: string]: any//NAO SEI NOME NEM TIPO
}

/*
function saudarComOla(pessoa: {nome: string}){
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: {nome: string}){
    pessoa.nome = 'Joana'
}
*/

function saudarComOla(pessoa: Humano){
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: "João",
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: "Jonas", idade: 27, altura: 1.74 })
