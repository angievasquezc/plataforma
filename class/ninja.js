class Ninja{
    constructor(nombreAtr, saludAtr, velocidadAtr=3, fuerzaAtr=3){
        this.nombre=nombreAtr;
        this.salud=saludAtr;
        this.velocidad=velocidadAtr;
        this.fuerza=fuerzaAtr;
    }
    sayName(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log(`nombre: ${this.nombre} salud: ${this.salud} velocidad: ${this.velocidad} fuerza: ${this.fuerza}`)
    }
    drinkSake(){
        console.log(this.salud+=10);
    }
}


const ninja1=new Ninja("Ninja1", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(nombreAtr, saludAtr=200, velocidadAtr=10, fuerzaAtr=10, sabiduriaAtr=10){
        super(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr);
        this.sabiduria=sabiduriaAtr;
    }
 
    speakWisdom(){
        super.drinkSake()
        return`mensaje de sabiduría ` ;
             
       
        
    }
    showStats(){
        // const message = super.showStats();
        // console.log(message);
    //    super.showStats();
        return `nombre:${this.nombre} salud: ${this.salud} velocidad: ${this.velocidad} fuerza: ${this.fuerza}(;) sabiduría: ${this.sabiduria}`
    }
    }


const sensei1= new Sensei("sensei1", 200, 10, 10);
console.log("resultados sensei");
console.log(sensei1.speakWisdom());
console.log(sensei1.showStats());






