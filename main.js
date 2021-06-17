//alert("Agora que deu certo pega na bilola")

//let frase = 'Dia chuvoso';


//substituição plavras 
//console.log(frase.replace("chuvoso", "Ensolarado"));

//arreys

//let frutas =  ['Banana', 'Maça', 'Uva'];

//insert or add

//frutas.push('Manga');

//deleta

//frutas.pop();

//quantidade 

//frutas.length()

//inverter

//frutas.reverse()

//string

//frutas.toString()

//String com alguma alteração : - , *, +

//frutas.join(" * ")

/*

let frutas = [
    { nome:"mamão", cor: "laranja"}, 
    { nome:"limão", cor: "verde"},
    { nome:"melão", cor: "amarelo"}
]


console.log(frutas);

*/

//recuperar dados do cliente !

/*
const idade = prompt("Qual é a sua idade");

if(idade > 17){
    alert('maior de idade ');
}else{
    
    alert('menor de idade');
}

*/


//Laço de repetição

//while
/*
var i = 0 ;

while(i <= 5){
    console.log(i);

    i = i + 1;//ou i++
}



//for


let i;

for(i = 0; i <= 5; i++){
    
    alert(i);

}

*/

//let data = new Date();

//horas getHours

//minutos getMinuts

//segundos getSeconds

//dias getDay

//messes  getMonth

//anos getYears

//alert(data.getDate()); 
/*

let idade = prompt("Qual é a sua idade?");


if(idade >= 18 ){

    console.log('Maior de idade')

}else{

 let valor = 18 - idade;
 
 console.log(`Menor de idade, faltam ${valor} anos para atingir a maior idade ! `);

}

*/

//funções 
 
/*

soma = (n1,n2) =>{
    return n1 + n2;

}
console.log(soma(8,245675))


setReplace = (frase, nome, mNome ) =>{
    return frase.replace( nome, mNome);
}

alert( setReplace("Mandela foi um grande Lider", "Mandela", "MLK"));

*/

/*

//Global e local

//Declaraçãp global
let validar;

let idade =prompt("Qual é a sua idade?")

function validarIdade(idade){

    //declaração local
    //let validar;

    if(idade>= 18){
        return validar = true;

    }else{
        return  validar = false;
    }


}

alert(validarIdade(idade))

*/

//passando paramentos na chamada de função com  onclick
/*
function autentic(click){
    
    if( click === 1){
        alert('Seja bem vindo usuário altenticado!');
    return true;
    }else{
        alert('Usuário não autenticado!');

    }  
    
}

console.log(autentic());

*/


//onclick e manipulação pelo id 

function clicou(){
    
    
    document.getElementById('agradecimento').innerHTML="<h1>Obrigado por clicar</h1>";

}

//redirecionar para uma pagina!

function redirecionar (){
    //outra janela
    window.open('https://www.w3schools.com/js/');
    
    //mesma janela 
    window.location.href = "https://www.w3schools.com/js/"
}


function  trocarTexto(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigdo por passar o mouse";
    elemento.innerHTML = "Obrigdo por passar o mouse";
    //alert("Trocar texto");
}


function  voltarTexto(elemento){
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}
    //alert("Trocar texto");


function carregar(elemento){

    alert('pagina carrregada! ');
}

//value do elemento vem como string 

function funcaoChange(elemento){
    //console.log(elemento.value);
    let conversao  = Number(elemento.value);
    console.log(conversao);
}