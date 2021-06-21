//funções do objeto

const user ={

    name: "José",
    lastName:"Anderson",
}

//keys retorna as chaves do obj
console.log("chaves do obj", Object.keys(user));

//values Recupera valores das chaves do obj
console.log("\nValor das chaves do obj", Object.values(user));

//entries retorna um array de arreys com valor prop_name, props_lastName
console.log("\nLista de propriedades e valores:", Object.entries(user));


//assign Margear as propriedades do objeto add mais uma chave 
//essa é uma forma errada, pois está modificando o obj 
Object.assign(user, {fullname:'José Aderson'});

console.log("\n Adciona a propriedade fullName ao obj", user);

//foma correta usando o Objct.assign, estamos criando um novo obj apartir do que já temos  
console.log("\nRetorna um novo objeto  mergeando dois ou mais obj:", Object.assign({}, user, {age:26}));

console.log(user);

//freeze previne todas as alterações do objeto

const newObj = { foo: 'mercado'};

Object.freeze(newObj);

newObj.foo = 'changes ';
delete newObj.foo;
newObj.mercado = "foo";

console.log('\nVariável após modificações:',newObj);

//seal permite apenas alterações de um obj existente, não cria nem deleta

const person = { name: 'Marcos'};

Object.seal(person);
person.name = 'Marcos Sales';
delete person.name
person.age = 26;

console.log("\n Valor da variável", person);





