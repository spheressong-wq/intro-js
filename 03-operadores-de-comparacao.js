// DICA: O resultado de uma comparação é sempre um valor booleano, ou seja, true or false




// 1 - === Igualdade estrita
// O operador de igualdade estrita verifica se os dois valores são iguais tento em tipo de DADO e VALOR.

console.log(10 === 10) // true
console.log(10 === 20) // false
console.log(10 === '10') // false

console.log("-----------------")

// 2 - Igualdade não estrita
// O operador de == também compara valores, mas, de forma resumida, observa apenas o VALOR da comparação, ignorando o tipo de dado.

// CURIOSIDADE: Nesse caso, por debaixo dos panos, o JavaScript faz uma conversão de tipos antes de comparar.

console.log(10 == 10)
console.log(10 == 20)
console.log(10 == '10')
console.log(0 == false)

// Os operadores de comparacao servem para comparar todos os valores

console.log("-----------------")

// 3 - !== Diferença estrita
// Tanto o operador !== quanto o != verificam se os valores são diferentes. Porém, no caso do operador de !==, ele verifica também o tipo de dado.

console.log(5 !== 3) 
console.log(5 !== 5) 
console.log(5 !== "5")

console.log("-----------------")


// 4 - != Diferença não estrita
// No caso desse operador, ele verifica apenas o valor, e não o ti´po de dado.

console.log(5 != "5")
console.log(5 != 3) 

console.log("-----------------")

// 5 - > maior que

// 7 - >= Maior ou igual
// Esse operador avalia se na condição, o elemento de comparação é maior ou igual.

const nota = 7
console.log(nota <= 7)
console.log(nota <= 8)

console.log("-----------------")

// 8 - <= Menor ou igual
// Esse operador avalia se na condição, o elemento de comparação é menor ou igual.

console.log(nota >= 7)
console.log(nota >= 8)
console.log(nota >= 6)
