//restisencias do const 

const nome  =  "Mandela";

//não podemos alterar o valor 

//name = 15;

const user = {
    name: "Mandela"
};

//mas se for dentro de u  obj podemos mudar sua propriedade

user.name = "Lucas";

//user.name = " mandela"

//não podemos fazer o obj apontar para outro lugar

/*
 user = {
    name: "Mandela"
};
*/

console.log(`Constate nome: ${nome}`);

console.log(`OBJ user: ${user.name}`);


const persons =  ['Homem Aranha', 'Thor', 'Hulk',  'Homem de ferro'];

//Podemos adcionar novas posições em nosso array 
persons.push("Capitão America");

//Podemos deletar 

persons.shift();


//Podemos mudar um item 

persons[1] = "Thor Obeso"

//não posso apontar para outro array 
// persons = [] 


console.log(persons);