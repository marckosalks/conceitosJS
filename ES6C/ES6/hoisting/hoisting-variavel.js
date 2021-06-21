

function fn(){
    //a função vai retornar undefined, pela variavela ainda não ser criada 
    //isso ascontece por caousa do hoisting
    //aqui foi corrigido deu erro  
    
    //console.log(text);

    const text = "eu sou progamador"

    console.log(text);

}

fn();
