//INTERFACE
//Interface é como se fosse um contrato.

interface Humano{
    nome: string
    idade?: number //É OPCIONAL
    [prop: string]: any//NAO SEI NOME NEM TIPO
    saudar(sobrenome: string): void
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

const pessoa: Humano = {
    nome: "João",
    idade: 27,
    saudar(sobrenome: string){
        console.log("Olá, meu nome é" + this.nome + " " + sobrenome);
    }

}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: "Jonas", idade: 27, altura: 1.74 })
saudarComOla(pessoa.saudar("do Carmo"))
