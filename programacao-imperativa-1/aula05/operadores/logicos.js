let dia = "domingo";
let clima = "ensolarado";

//Operador end(e) - && -> todas as afirmativas ou negativas devem ser satisfeitas para afirmar a sentença
console.log(dia == "domingo" && clima == "ensolarado");

console.log(dia == "segunda" && clima == "ensolarado");

//Operador OR(ou) - || -> apenas uma condição precisa ser satisfeinta afirmar toda sentença

//Operador de negação ou inversão de boleano -> !

console.log(!true);

// Operador de concatenação +, utilizado para juntar strings, geralmente usado para forma frases.

let msg = "Seja Bem vindo! " + "Jhonathan.";
console.log(msg);

// Operador de concatenção também pode utilizar variáveis

let nome = "Jhonathan";
let sobrenome = "Weber";
msg = "Seja bem vindo! " + nome + " " + sobrenome;
console.log(msg);

// Obs: se numeros forem utlizados para concatenar com strings eles serão automaticamente convertidos em strings.