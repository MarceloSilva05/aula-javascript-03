
//1
let x = 5, y = 7;

if (x < y) {
    console.log("Olá mundo!");
}else if (x > y) {
    console.log(" Mundo, olá!");
}else{
    console.log("Adeus!");
}

//2
let fruta = "laranja";

switch (fruta) {
    case "banana":
        console.log("O filme é Os minions");
        break;
        case "laranja":
            console.log("O filme é Laranja Mecânica");
            break;
            case "maçã":
                console.log("O filme é Branca de neve");
                break;
    default:
        console.log("O cinema tá fechado");
        break;
}
