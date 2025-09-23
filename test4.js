const prompt = require('prompt-sync')();
let a = prompt('Entre nomber A : ');
let b= prompt('Entre nomber B : ');

if(a==b){
    console.log('A = B')
}else{
    if(a>b){
    console.log(" A > B");
}else{
  console.log('B > A')
}
}


