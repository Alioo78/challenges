const prompt=require('prompt-sync')();
let user=prompt("Entre un nombre : ");
if(user>0 || user<0){
    if(user<0){
        console.log('Le nomber est négatif')
    }else{
        console.log('Le nomber est positif')
    }
}else{
        console.log('Le nomber est Null')
}