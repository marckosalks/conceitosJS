class Person {
    constructor(name){
        this.name = name
    }

};

class PessoaB {
    constructor(name, cpf){
        super(name,cpf)
        this.cpf = cpf;
    };
};

const p1 =  new PessoaB('Mandela', 0036253454);

console.log(p1);

//por algum motivo não aparecem o cpf
