//Global e local

//Declaraçãp global
//essa variavel foi declarada de maneira global 
let validar;

let idade =prompt("Qual é a sua idade?")

function validarIdade(idade){

    //declaração local
    //let validar;

    if(idade>= 18){
        return validar = true;

    }else{
        return  validar = false;
    }


}

alert(validarIdade(idade));