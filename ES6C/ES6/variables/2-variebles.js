
// escopo let

(() =>{
    let nome =  "Marcos";

    console.log(`Esse é o seu nome na função : ${nome}`);
    //não reconhece undefined

    if(true){
        let nome ="edson";
        
        console.log(`Esse é o seu nome dentro do if: ${nome}`);
        //exibe o resultado do escopo do if ou escopo de bloco
    }

    console.log(`Esse é o seu nome após o if: ${nome}`);
    //exibe o mesmo resultado de dentro do if 

})();


//let respeita os 3 escopos 