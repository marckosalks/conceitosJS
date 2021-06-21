//break: sai do laço 

let i =  0;

while(true){
    i++;
    if(i > 2){
        break;
    }

    console.log(i ," me chama de bb  e em cuidar de mim ! ");


}


//continue pula uma das reptições do laço 
for(let i=0; i < 5;i++){
    
    if(i === 2){
        continue;
    }
    console.log(i ," me chama de bb  e em cuidar de mim ! ");
}