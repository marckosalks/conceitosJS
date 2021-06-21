function fn(){
    //função é isada como um todo não importa se a linha está acima 

    console.log('Hoisting de função');

    log = (value) =>{
        console.log(value);
    }
}

fn();   


//projeto real configurar == linter  para isso não acontecer 