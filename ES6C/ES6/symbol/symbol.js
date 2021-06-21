const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbol são únicos 

console.log('symbol1 é igual a symbol2:', symbol1 === symbol1);

//Previnir conflito entre eles
//propriedades não podem ser subscritas 

const nameSymbol1 = Symbol('name');

const nameSymbol2 = Symbol('name');


//unica forma de alterar um symbol
const user = {
    [nameSymbol1]: 'Marcos Torso',
    [nameSymbol2]: 'Silvio Silva',
    lastName: 'Aldrasio caleb',
};

console.log(user);

//symbol cria propriedades qua não são enumerables, não  aparecem no for in 

for(const key  in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave: ${key}: ${user[key]}`);
    }
}

console.log(`\n Chaves do obj user: ${Object.keys(user)}`);
console.log(`\nValor das Chaves do mesmo obj: ${Object.values(user)}`);

//Usar a forma especifica para renderizar o obj Symbol

console.log('\nValor das Chaves do mesmo obj: ',Object.getOwnPropertySymbols(user));


//acessando todas propriedades obj

console.log('\nValor das Chaves do mesmo obj: ',Reflect.ownKeys(user));

//criar enum

const directions = {
    UP : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT'),

};

console.log(directions);