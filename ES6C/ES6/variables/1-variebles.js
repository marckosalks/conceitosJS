var nome =  "Marcos";

(() =>{
    var nome;

    console.log(`Esse é o seu nome na função : ${nome}`);
    //não reconhece undefined

    if(true){
         nome ="Marcos";
        
        console.log(`Esse é o seu nome dentro do if: ${nome}`);
        //exibe o resultado do escopo do if ou escopo de bloco
    }

    console.log(`Esse é o seu nome após o if: ${nome}`);
    //exibe o mesmo resultado de dentro do if 

})();

//var não respeita escopo de bloco, apenas  função e global