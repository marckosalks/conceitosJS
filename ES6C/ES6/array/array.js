
//user
const person = ['Marcos',  'Flavia', 'Armenia'];

//enum
const gender ={
    MAN : Symbol('M'),
    WOMAN : Symbol('W'),
}
//persons
const user = [
    {
        name: 'Marcos',
        age:51,
        gender: gender.MAN
    },
    {
        name: 'Flavia',
        age:28,
        gender: gender.WOMAN
    },
    {
        name: 'Armenia',
        age:19,
        gender: gender.WOMAN
    }


]    

//.Length retornar quantidade de iktens 

console.log(' retornar quantidade de itens: ', person.length );

//.isArray mostra se a variave é um array

console.log(' retorna o tipo da variavel: ', Array.isArray(user) );

//forEach.  mostra os itens do array
//tres parametros variavel,  index,  arr
 user.forEach((user, index, arr) => {
    console.log(`Nome: ${user.name} index: ${index}`, arr);


})


//filtrar array

const womans =  user.filter(use => use.gender === gender.WOMAN)
console.log("\nApenas os mulheres da lista ",womans);

//não alterar as propriedades do obj empre criar um novo 
//map retorna um  novo array 

const job = user.map(use =>{
    use.job =  'Analisar de sistemas' ; 
    return use;
});
console.log("\nPessoas com add  do job", job);


//Tranformar um array em um outro tipo 


//somando todas as idades do array, retornar a veriavel
//tranformar o array em numero  
const totalAge = user.reduce((age, use)=>{
    age += use.age;
    return age

}, 0);

console.log("\nSoma de todas as idades da lista: ", totalAge);

//juntar operaçoes 

const totalage2 = user
.filter(use => use.gender ===  gender.WOMAN).reduce((age,use) =>{
    age += use.age
    return age;
},0);
console.log("\nSoma das mulheres da lista: ", totalage2);