const soma =(n1) =>{

    return function(n2){
        return n1 + n2;
    }
}

//forma burra
/*

soma(2,3);
soma(2,4);
soma(2,5);



console.log(soma(2,2));

*/
//forma certa

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

