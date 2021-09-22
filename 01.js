
//1
function maiorIdade(){
    let idade=124;
    if(idade>=18){
        console.log("Que legal! Você já pode ter a carteira de habilitação");
    }else{
        console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação");
    }
}
maiorIdade();

//2
function ensinoMedio(){
    let ensino="n";
    if(ensino=="sim"||ensino=="s"){
        console.log("Poxa, que legal!");
    }else if(ensino=="não"||ensino=="n"){
        console.log("Falta pouco! Logo você termina");
    }else{
        console.log("Valor invalido");
    }
}
ensinoMedio();