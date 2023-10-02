class Ninja{
    constructor(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr){
        this.nombre=nombreAtr;
        this.salud=saludAtr;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log(`nombre: ${this.nombre} salud: ${this.salud} velocidad ${this.velocidad} fuerza ${this.fuerza}`)
    }
    drinkSaje(){
        console.log(this.salud+=10);
    }
}


const ninja1=new Ninja("Ninja1", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSaje();



