

// Asociacion a Uno
class Persona {
    constructor(nombrej,apellido) {
      this.nombrej = nombrej;
      this.apellido = apellido;
      this.personas = [nombrej,apellido]; //Asociacion a Muchos

    }

    
    presentacion1p() {  
        console.log(`Hola. Soy ${this.nombrej}. Y mi Apellido es ${this.apellido}`);
      }
      presentacion2p() {
        console.log(`Hola. Las Personas Registrados son :  ${this.personas}.`);
      }
      /** @abstract */
    error() { throw new Error("abstract"); }
  }     
  
  function regper(){
    //let inter = nombrej.value;
    let ins1 = new Persona();
    console.log(ins1.nombrej,ins1.apellido);
    console.log(ins1.presentacion1p());
    }

//Un solo jugador a Registrar
let per1 = new Persona("Pablo","Carmona");
  
// Varios jugadores a registrar
let per2 = new Persona;
per2.personas = ["Martin","Carrera","Sofia","Costa"];

//Mostrar un solo jugador 
console.log("Soy "+per1.nombrej + "    Apellido " + per1.apellido );

// Mostrar dos jugadores
console.log(per2.personas);

// Mostrar 1 jugador con presentacion
console.log(per1.presentacion1p());

// Mostrar 2 jugadores con presentacion
let arr = [per2];
for(let cont of arr){
console.log(per2.presentacion2p());
}



class Jugador extends Persona {
    constructor(nombrej,apellido,gamerid) {
        super(nombrej,apellido);
        this.gamerid = gamerid;
        
    }

    generaid(nombrej,apellido,gamerid){
        let alea =  Math.floor(Math.random()*(50-gamerid))+gamerid;
        let id = nombrej[1] + apellido[4] + alea;
        console.log("El gamer id es " + id);
    }

    presentacionj() { console.log("----Bienvenidos----- "); }
  
    
}

    
  let reg3 = new Jugador("Sandra","Velazquez",5);
  let reg1 = new Jugador("Arturo","Ibarra","DearGood");
  let reg2 = new Jugador(per1.nombrej + per1.apellido + "KillBill");

  console.log("El Nombre es " + reg1.nombrej + "    El Apellido es  " + reg1.apellido + "   El GamerID es " + reg1.gamerid );
  
  console.log("los datos 1er Jugador son " + reg2.nombrej );
    
  console.log(reg2.presentacionj());
  
console.log(reg3.generaid(reg3.nombrej,reg3.apellido,reg3.gamerid));
