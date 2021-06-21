//funções de 1º classe

//retornando uma string

function getName(){
    return 'Marcos Sales'
}


//retornda a função ou a sua argumentação 

function logoFn(fn){
    console.log(fn);
}


//atribuir a variavel ou estrura de dados

const logoFnResul = logoFn;


//passada como argumentos

logoFnResul(getName);