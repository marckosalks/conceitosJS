//Spread imultabilidade

let partes =  ['ombros','joelhos'];

let musica = ['cabeça', ...partes, 'e', 'pés'];

console.log(musica);
var args = [0,1,2];
function fn(a,b, c){}

console.log('\n  ' + fn(...args) );
