const prompt = require("prompt-sync")();
let numr = prompt("Enter your text : ");
let sp=numr.split('');
let rev = sp.reverse();
let jo= rev.join('');

console.log(jo);