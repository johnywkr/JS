console.log("aula 52 JS")

var primeiroNumero =2;
var segundoNumero = 2;

var totalDivisao = primeiroNumero / segundoNumero;
console.log(totalDivisao, "DIVISAO");

var totalSoma = primeiroNumero + segundoNumero
console.log(totalSoma, "SOMA");

var totalVezes = primeiroNumero * segundoNumero
console.log(totalVezes, "MULTIPLICACAO");


console.log("------------------------------");

var QuantidadeDeAlunosNoCurso = 24;

// o minimo para ter curso no senai sao 20 alunos

if (QuantidadeDeAlunosNoCurso >= 20){
    console.log("VAMOS TER CURSO")
}



console.log("------------------------------");

var idade = 70;
// maior ou igual a 16 anos
// maiores de 70 anos , nao sao obrigados a votar 

if (idade >= 16 ) {
    if (idade >= 18 && idade < 70) {
        console.log("ele é obrigado a votar");
    } else {
    console.log("pode votarb, porem é facultativo");
}
} else {
    console.log("nao e permitido votar");
}



console.log("------------------------------");

var idade = 130;

if (idade < 10) {
    console.log("criança")
} else if (idade < 16){
   console.log("adolescente") 
} else if (idade < 30) {
    console.log("adulto")
} else if (idade < 70){
    console.log("velhinho")
} else if ( idade <100){
    console.log("bem velhinho")
} else if (idade < 150)
console.log("ta vivo ainda ");

console.log("------------------------------");

var sexo = "masculino";

if (sexo == "masculino" ) {
    console.log("homem");

} else {
    console.log("mulher");
}


console.log("------------------------------");

var alto = false;

if (alto) {
    console.log("pode it na montanha russa");

} else {
    console.log("pode it no bate bate");
}

console.log("------------------------------");


//se a pessoa for maior de idade,  entao ela pode tirar carteira de motorista .

var idade = 14;

if (idade >=18) {
    console.log("pode tirar carteira ");
} else if (idade <=18){
    console.log("nao pode tirar carteira ");
}