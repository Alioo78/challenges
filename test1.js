  const prompt = require("prompt-sync")();
   let number = prompt("Enter your namber :");
   if(number % 2 == 0){
    console.log('nombre pair')
   }else{
    console.log('nombre impair')
   }