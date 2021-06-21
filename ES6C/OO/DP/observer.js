class Obsevable{
    constructor() {
    //tem que ter uma lista
        this.obsevables = []
    }

    //add
    subscribes(fn){
        this.obsevables.push(fn);
    }

    //noticica
    notify(data){
        this.obsevables.forEach(fn =>fn(data));
    }


    //filtra os não cadastrados 
    unsubscribes(fn){
        this.obsevables = this.obsevables.filter(obs => obs !== fn)
        //this.obsevables.pop(fn);
    }


} 

//instanciar

const o  = new Obsevable();

const logoData1 =  data =>  console.log(`Subscribe 1 ${data}`);
const logoData2 =  data =>  console.log(`Subscribe 2 ${data}`);
const logoData3 =  data =>  console.log(`Subscribe 3 ${data}`);

o.subscribes(logoData1);
o.subscribes(logoData2);
o.subscribes(logoData3);

o.notify(`notfild-1`)

o.unsubscribes(logoData2);
o.notify('notfild-2')