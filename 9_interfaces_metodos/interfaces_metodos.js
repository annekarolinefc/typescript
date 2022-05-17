//INTERFACE
//Interface é como se fosse um contrato.
/*
function saudarComOla(pessoa: {nome: string}){
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: {nome: string}){
    pessoa.nome = 'Joana'
}
*/
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
var pessoa = {
    nome: "João",
    idade: 27,
    saudar: function (sobrenome) {
        console.log("Olá, meu nome é" + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: "Jonas", idade: 27, altura: 1.74 });
saudarComOla(pessoa.saudar("do Carmo"));
