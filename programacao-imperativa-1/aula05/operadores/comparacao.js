//Exemplo do video da aula 5 - Operadores Matemáticos

// Operadores de comparação simples ou igual à

console.log(
  `Comparando simples de um number e uma string de mesmo valor: 2 == "2" -> ${
    2 == "2"
  }`
);
 
// Operadore de comparação rigorasa ou estritamente igual à: neste caso compara os [tipos] de valores.
console.log(
  `Comparando estrita de um number e uma string de mesmo valor: 2 === "2" -> ${
    2 === "2"
  }`
);
console.log(
  `Comparando estrita de um number e number de mesmo valor: 2 === 2 -> ${
    2 === 2
  }`
);

// Operador de diferente de
console.log(`Comparando se é diferente: 5 != "5" -> ${5 != "5"}`);

// Operador de estritamente diferente, também compara os tipos de dados.
console.log(`Comparando se é estritamente diferente: 5 !== "5" -> ${5 !== "5"}`);
console.log(`Comparando se é estritamente diferente: 5 !== 5 -> ${5 !== 5}`);

// Operadores maior que e maior igual

console.log(`Comparação, 5 > 3: ${5 > 3}`); // deverá retornar um true
console.log(`Comparação e igualdaded, 5 >= 5: ${5 >= 5}`); // deverá retornar um true
console.log(`Comparação e igualdaded, 5 >= 5: ${5 >= 7}`); // deverá retornar um false


// Operadores menor que e menor ou igual seguem o mesmo raciocinio do maior que e maior ou igual




//Obs: Estes falores sempre retornam um valor boleano ou seja um verdadeiro(true) ou falso(false);
