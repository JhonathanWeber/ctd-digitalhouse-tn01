// Funções Expressas

/* 
----------------------------------------------------------------
let soma = function(){

} 
----------------------------------------------------------------
*/


// Funções Declarada

/* 
----------------------------------------------------------------
function subtracao(){

} 
----------------------------------------------------------------
*/

//OBS: As duas operam da mesma forma e sua diferença é apenas tecnica.


//Está é uma função declara
function darOi(){
    console.log("Olá, tudo bem?");
}


// Está é a forma de chamar uma função [nomeDaFuncao()]
darOi();
darOi();

// Está é uma função expressa
let soma = function(a,b){
    return a + b;
}

console.log(soma(2,2));

// Escopo de variável

/* Em JavaScript existem algumas formas de se declarar variáveis, veja os exemplos abaixos */

// Escopo Local siginifica que aquele valor apenas é valido dentro do bloco da função, fora dele ele não existe.

// Vejamos um exemplo
    function adicao(a,b){
        let num1 = a;
        let num2 = b;
        let sum = num1 + num2;
        return sum;
    }

    // console.log(sum); -> O que acontece se chamar essa linha que tenta acessar uma variável que foi declarada dentro do escopo loca de uma função é que vai retornar um erro informado que sum não foi declarada!
    console.log(adicao(2,3));


// Escopo global é quando um variável é declarada fora do escopo da função e pode ser chamada para dentro da função

let teste = 0;
function escope(){
    console.log(++teste);
};

escope();

