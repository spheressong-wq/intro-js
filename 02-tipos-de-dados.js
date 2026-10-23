// O JavaScript possui 7 tipos de dados primitivos(que guardam um único valor simples)

// 1 - Strings
// O tipo String representa sequências de caracteres, como nomes, mensagens, endereços, emails, ou seja, textos de modo geral.

const nome = "Leila";
const cidade = 'São Paulo';
const mensagem = `Olá, fulanx`;

console.log(nome)
console.log(cidade)
console.log(mensagem)
console.log("--------------")

// 2 - Number
// O JavaScript usa o tipo Number para representarnúmeros inteiros e decimais.

const idade = 20;
const altura = 1.70;
const preco = 599.90;
const temperatura = -3.17;

console.log(idade);
console.log(altura);
console.log(preco);
console.log(temperatura);

console.log("--------------")

// 3 - BigInt
// O tipo BigInt permite representar números inteiros maiores do que o limite de precisão dos números inteiros comuns do tipo Number.
const numeroGrande = 82338246274627343264729n
// o "n" no final do número indica que ele é um BigInt
console.log(numeroGrande)


// 4 - Boolean - Valores lógicos
// O tipo boolean representa apenas dois valores:
// True e false
// É muito utilizada para verificar condições, controlar funcionalidades e representar estados.

const estaLogada = true;
const temPermissao = false;

console.log(estaLogada)
console.log(temPermissao)

console.log("--------------")

// 5 - Undefined
// No JavaScript, undefined("indefinido") representa um valor que não foi definido.

let fruta;
console.log(fruta)
console.log(typeof fruta);

// O "typeof" pode ser usado para você descobrir qual o tipo de dado. EX:
// console.log(typeof estaLogada)

console.log("--------------")

// 6 - Null

const fotoDePerfil = null;

console.log( typeof fotoDePerfil)
// O null no JavaScript representa a ausência INTENCIONAL de um valor

console.log("--------------")

// 7 - Symbol
// O symbol é utilizado para criar identificadores único

const id1 = Symbol("id")
const id2 = Symbol("id")

console.log( id1 == id2 );
// Observe que o resultado no console foi "falso"