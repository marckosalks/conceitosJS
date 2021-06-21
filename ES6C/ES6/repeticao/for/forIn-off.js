const array  =  [2, 4, 6];
array.foo = 'hello!';


//string e numeros 
for(let i  in array ){ //  2, 4, 6, hello
    console.log(i);
}


//apenas numeros 
for(let i  of array ){ //  2, 4, 6
    console.log(i);
}
