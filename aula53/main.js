console.log("estou vivo");

var alunos = ["amanda", "john","leandro",];

alunos.forEach(function(aluno) {
    console.log(aluno);
});




console.log("-----------------------------");

//              0       1      2       3     4
var times = ["barça","real","psg","bayer","city"];

times.map(function(times){
    console.log(times);

})

console.log("------------------------")

times.map((times)=>{
    console.log(times);
})


console.log("-----------------------------");

var tecnologias = ["php","java","python",];
tecnologias.map((tecnologias) =>{
console.log("o nome da tecnologia é: ,  "  + tecnologias);
})


console.log("-----------------------------");

var nome = "johne";
var sobre = "araujo";  
console.log(nome +  " " + sobre);

console.log("-----------------------------");

console.log(`${nome } ${sobre}`);