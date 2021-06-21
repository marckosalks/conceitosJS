//declaração array 

const lista = [0,1,2,4,6,8];

const lista1 = new Array(0,1,2);



//Array.of

const persons =  Array.of("sandro" , "fideliz", "Jorge");

//posso usar numeros e strings 

console.log(persons);


// Array posições vazias 

const lista2 = Array(1);

//se passar um array com mais um parametro ele cria um array normal 

//Array.from
//transformar em array 
//const divs= document.querySelectorAll('div')

//const arrDiv =  Array.from(divs);


//push === add -  retorna tamanho 

persons.push("Sergio")

console.log(persons);



//pop ===  delatar - item removdo 

persons.pop("Sergio")

console.log(persons);

//unshift add no começo 

persons.unshift("Sergio")

console.log(persons);

//shift deleta a 1º possiçção 

persons.shift("Sergio")

console.log(persons);


//concat === exibir duas listas em uma, sem alterar os dados do array  

const lN = persons.concat(lista);
console.log(lN);


//slice retorna uma lista com apenas alguns elementos do array  sem alterar 

const slc = lista.slice(2);

//inverte a ordem  com numeros negativos 

const slc1 = lista.slice(-1);

//console.log(slc);


//console.log(slc1);


//Splice altera na refencia do array 

 lista2.splice(0, 0,  "Meu nome é jerônimo !")

console.log(lista2);