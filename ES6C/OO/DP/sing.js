 function Pessoa(){
     if(!Pessoa.instance){
         Pessoa.instance = this;
     }
 
     return Pessoa.instance;
}

const p  = Pessoa.call({name: "Marcos"});

const p1  = Pessoa.call({name: "Marcos Sales"});

console.log(p);

console.log(p1);