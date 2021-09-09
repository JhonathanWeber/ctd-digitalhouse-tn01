let carro = {
    nome: "fox",
    ano: 2012,
    cor: "vermelho",
    ligar: () => {
        msg = `Carro ${carro.nome} está ligado!`;
        // msg = "Carro " + carro.nome + " está ligado!!!";
        return console.log(msg);

        //return console.log("Carro " + carro.nome + " está ligado!!!");

        //console.log("Carro " + carro.nome + " está ligado!!!");


    }
}

//carro.ligar();


//-------------------------------------------------
// Funções construtoras

function Carro(nomeCarro, anoCarro) {
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", "2019");
let gol = new Carro("Gol", "2015");

console.log(civic, gol);


https://us04web.zoom.us/j/9785316489?pwd=dVI0eTF1NFQ0eTgyT09OWVNwSDVWQT09 