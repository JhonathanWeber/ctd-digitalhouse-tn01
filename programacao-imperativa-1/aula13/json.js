let pessoa = {
    nome: "Jhonathan",
    idade: 31,
    altura: 1.68
}


// 
let formatJson = JSON.stringify(pessoa);

console.log(formatJson);

let renewObject = JSON.parse(formatJson);

console.log(renewObject);