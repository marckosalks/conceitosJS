//1º forma
/*
function pessoa(name){

        return{
        name,
        lastName: "lastname"
        
    }

}

const p =  pessoa('Sergio');
console.log(p);
*/

//2º forma 

/*
function pessoa(custumerPops){

    return{
    name: "",
    ...custumerPops,
    lastName: "lastname"
    
}

}

const p =  pessoa({name:'Sergio',  age: 18});
console.log(p);

*/

