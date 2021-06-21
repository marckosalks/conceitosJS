/*

const myText =  'Bom dia !';

myText.constructor ->  String
myText.__proto__ ->  String.prototype

*/

function pessoa(name){
    this.name = name;

    return {
        name: 'Anderson'

    };

}




const p = new pessoa('Mandela');
console.log(p)

//new foo(...);

//novo obj criado 

//obj tem acesso as propriedades da fução construtora

//se há um retorno explicito, é retornado o que tem dentro da expicidade não o "this"
//não retorna objeto criado  