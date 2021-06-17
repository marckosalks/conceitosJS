
//onclick

function autentic(click){
    
    if( click === 1){
        alert('Seja bem vindo usuário altenticado!');
    return true;
    }else{
        alert('Usuário não autenticado!');

    }  
    
}

console.log(autentic());




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

//manipular eventos e trocade elementos  

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


    //reload


function carregar(elemento){

    alert('pagina carrregada! ');
}

//value do elemento vem como string 

function funcaoChange(elemento){
    //console.log(elemento.value);
    let conversao  = Number(elemento.value);
    console.log(conversao);
}