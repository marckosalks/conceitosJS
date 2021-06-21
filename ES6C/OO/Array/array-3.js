//find retorna apenas 1 elemnto 

/*
const arr = [,0,1,2,3,4];


    const valorMenor =arr.find(values => values > 2);
    console.log(valorMenor);

*/

// findindex retorna o a chave ou seja a chave 

//filter novo array todos os elementos 

const arr = [,0,1,2,3,4];


    const valorMenor =arr.filter(values => values > 2);
    console.log(valorMenor);

//indexOf primeira vez que um determinado valor aparece 

//lastIndexOf() ultima vez que o valor aparece 


//arr.includes saber se um elemento consta no array true and false 

//some no minimo kum atende a condição 

const students = [
    {name: 'Edson', grade: 5},
    {name: 'Tompson', grade: 9},
    {name: 'Manoel', grade: 8},
    

]

//let bom = students.some(any => students.grade === 9);

//console.log( bom);


//every saber se todos os itens fazem parte da condição 

//sort ordena os itens do array 

//let resul =  students.sort((current, next) => next.grade  -  current.grade )

//console.log(resul)


//join para arrumar pelo delimitador 

//reduce retorna um novo tipo de dado , total em primeiro 

let resul = students.reduce((total,student)=> total +=  student.grade, 0);

 console.log(resul)