//TIPO STRING
let nome = "João"
console.log(nome);
//nome = 28 -> o programa nao permite. Ele entendeu que é do tipo string.


//TIPOS NUMERICOS
let idade = 27
//idade = 'Ana'
idade = 27.5 
console.log(idade)


//TIPO BOOLEANO
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

//TIPOS EXPLÍCITOS
let minhaIdade;  //declarou a variável sem nenhum tipo implicito
minhaIdade = 27
console.log(typeof minhaIdade);
minhaIdade = 'Minha idade é 27'//deste modo, permite alteração
console.log(typeof minhaIdade)


let idadeAtual: any 
let idadeAntigo: number


//atribuindo tipos
let nomeDoMeio: string = "Fortunato"
let possuiCNH: boolean = true
let idade2022: number = 29