//Node list não tem funções normais de um array, usar array from para isso !

//for Each
//valor do item , chave do item 

/*
const arr = ["Carmelo","PJtucker", "CJ Macolun", "Will Barton"] 

arr.forEach((value, index) =>{
    console.log(`\n Chave:${index}  Valor: ${value}`)
});

*/
//Pode passar apenas um dos paramentros 

const arr = ["Carmelo","PJtucker", "CJ Macolun", "Will Barton"] 

arr.forEach((value) =>{
   // console.log(`\n Jogadores NBA: ${value}`)
});

//map novo array dos elementos desse array 


arr.map((value, index) =>console.log(value,  index) )

//flat retorna um depth

const array  =  [,0,1,[[2,3],4,5]];

//quantidae de niveis que desejo descer 
console.log(array.flat(2));

//flatMap retorna um novo array com 1 nivel de profundidade 


const arr1 =  [,0,2,3,4,6]

let resultado = arr1.flatMap((value) => [value *  2] )

console.log(resultado);


//keys array comas chaves do array, iteraitor 

//values array com os valores do array, iteraitor 

//entries 

let keys = arr1.keys();

let values  = arr1.values();

let entries =  arr1.entries()

console.log(keys.next());

console.log(values.next());

console.log(entries.next());