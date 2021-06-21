    //na arrow fn a exibição é nativa do seu scopo  
    
(() =>{
    this.name = 'arrow function';
    const getArrowFn = () => this.name;

    //na fn ela procura dentro do obj para poder usar o this 
    function getName (){
        return this.name;
    }

    //nome da chave e valor do obj são o mesmo 
    const user = {
        name: 'Nome do obj',
        getArrowFn,
        getName,
    }
    //exibição
    

    console.log(user.getName());
    
    console.log(user.getArrowFn());

 })();