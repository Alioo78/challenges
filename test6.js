const prompt=require("prompt-sync")();
let n= prompt('Enter : ');

if(n%4==0){
    console.log("année non bissextile")
}else{
    if(100%n > 0){
        console.log("année bissextile")
    }else{
        if(n%400 > 0){
            console.log("année bissextile")
        }else{
            console.log(' année non bissextile')
        }
    }
}