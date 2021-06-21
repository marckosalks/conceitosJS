something in somethingItems ;

//In no Array

let arvore  = Array( 'copa', 'galhos', 'tronco','cedro', 'raiz');

0 in arvore;//true
4 in arvore;//true
6 in arvore;//false

'cedro' in arvore; //false precisa colocar a chave (indece)
'cedro' in arvore[3];

'length' in arvore// true pois essa é uma propriedade do array 

'PI' in Math// o mesmo vale para essa propriedade
let minhaString =  new String('coral');

//Obj personalidade

let meucarro = {marca:'Honda', modelo:'Civic',cor:'black' };

//verificar se apripriedade existe
'marca' in meucarro;
'modelo' in meucarro;

//instacef se é uma instacia de alguma coisa 
objeto instanceof tipoObjeto;

let dia = new Date(2018, 12, 17);

if(dia instanceof Date){
    //code true 
}