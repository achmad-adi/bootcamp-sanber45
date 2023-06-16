const prompt = require('prompt-sync')({sigint: true});
const x = prompt('number: ');

// Contoh penggunaan rumus sqrt(x)
let akarKuadrat = Math.sqrt(x); 


//console.log(akarKuadrat);
if(x <= 0){
    console.log("Tidak bisa bilangan negatif")
} 
else if(x % 2){
    console.log("Tidak bisa bilangan ganjil")
}
else{
    console.log(akarKuadrat)
}