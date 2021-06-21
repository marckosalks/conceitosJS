let numeros =  [-1,0,1,2,3,4,5];

/*
//sempre colocar esse item que funciona como a chave do 
numeros.forEach((item)=>{
    if(item % 2 ===0){
        console.log(`\n${item} é par!`);
    }else{
        console.log(`\n${item} é impar!`);
    }
});
*/
numeros.forEach((item)=>{
    if(item % 2 ===0){
        console.log(`\n${item} divisivel por 2`);
    }else if(item % 3 === 0){
        console.log(`\n${item} divisivel por 3`);
    }else{
        console.log(`\n${item} não é divisivel  por 2 nem por 3`);
    }
});
