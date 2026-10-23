// Variáveis - Uma variávbel nada mais é do que um identificador que permite identificar o valor armazenado durante a execução do código.

// Exemplo: Imagine uma caixa etiquetada. A etiqueta é o nome da variável e o conteúdo é o valor atual que ela armazena/representa
// let etiqueta = valor

    let nome = "Leila";

// O JavaScript possui três formas de declarar variáveis.

// 1 - const
    const pais = "Brasil";
    console.log(pais)

// Com a declaração const, não é possível retribuir novos valores para uma variável. Descomente a linha abaixo para ver o erro no console. 
// const pais = "Portugal";

// 2 - let
    let idade = 20;
    console.log(idade)

    idade = 23;
    console.log(idade)

// redeclarando o valor da variável
    idade = 40;
    console.log(idade)

// 3 - var (não recomendado)
    var cidade = "São Paulo"

// Reatribuindo o valor da variável
    cidade = "Santos"
    console.log(cidade)