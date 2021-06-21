//retorna tamanho da String

const textSize = 'Texto'.length;
console.log(`\n Quantidade de letras do texto:`, textSize);

//retorna um array quebrando a string por um delimitador

const splittedText = 'Texto'.split('x');
console.log(`\n  Array com as posições separadas pelo delimitador:`, splittedText);


//Retorna a " fatia" de um valor
const lastChar = 'Texto'.slice(0);
console.log(`\n Ultima letra de uma string:`, lastChar);

const allWhithoutLastChar = 'Texto'.slice(0,-1);
console.log(`\n Valor da String da primeira letra meno a ultima:`, allWhithoutLastChar);

const  secondToEnd = 'Texto'.slice(1);
console.log('\n Valor da segunda letra até a última:', secondToEnd);

//Retorna N caracteres a partir de uma posição 
 
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\n As duas primeiras letras:', twoCharsBeforeFirstPos);

