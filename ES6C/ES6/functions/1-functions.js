function fn(){
    return 'funciondo';
}

//primeira forma: não precisa colocar as chaves 
const arrowFn = () => 'funcionando'; 

//segunda forma: usar return junto a declaração da variavel ou if 

const arrowFn2 = () => { 
    return 'funcionando';
};

fn.prop = 'Posso criar propriedades';

//Funções tambem são objetos

console.log(fn());
console.log(fn.prop);

//Receber parâmetros 


const logoValue = value => console.log(value);
const logoFnResult = fnParam => console.log(fnParam());

logoFnResult(fn);


//Receber e retornar funções 
const controlFnExec = fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

const handleFnExec = controlFnExec(fn);


handleFnExec(true);
handleFnExec();

console.log(handleFnExec)


//sem a es6

function controlFnExec1(fnParam){
    return function (allowed){
        if(allowed){
            fnParam();
        }
    }
}