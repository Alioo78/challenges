const prompt=require("prompt-sync")();
let input= prompt('Enter : ');

if(input=="rouge"){
    console.log('Arrêt');
}else{
    if(input=="jaune"){
        console.log("Préparez-vous")
    }else{
        console.log("Allez")
    }
}