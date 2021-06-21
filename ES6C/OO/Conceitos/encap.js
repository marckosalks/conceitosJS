class person {
    #name = '';

constructor(name){
    this.#name = name;
}

//exibir
get name () {
    return this.#name;

}

set name (name) {

    this.#name = name;

 }
} 

const p1 = new person('Sandro');

//como exibir um atributo pprivado 

console.log(p1.name);