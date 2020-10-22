//Ejercicio 1
class Jugador {
    constructor(nombre,ocupacion,faccion)
    {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }

    toString(){
        console.log(`Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de vida: ${this.puntosVida}, Facción: ${this.faccion}.`);
    }
}

let j1 = new Jugador("Pepe","escudero","Los buenos");
let j2 = new Jugador("Manolo","arquero","Los malos");

j1.toString();
j2.toString();








//Ejercicio 2
class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño.`);
    }
}

//Nueva clase que hereda de Zombi
class Abominacion extends Zombi{
    constructor(nombre,puntosVida,potencia){
        super(nombre,puntosVida,potencia);
    }

    ataqueMultiple(objetivo)
    {
        console.log(`${this.nombre} realiza un combo de 3 golpes a ${objetivo} y le causa ${this.potencia*3} puntos de daño.`);
    }
}





//Ejercicio 3
class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(`${jugador.nombre} consume ${this.nombre} y no tiene ningún efecto.`);
    }
}
 
let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador) {
        //Se guarda la vida antes de modificarla para calcular cuanto recupera
        let vidaAnterior = jugador.puntosVida;
        //Se le suman los puntos de vida hasta que llegue a 10
        jugador.puntosVida += this.poder;
        if(jugador.puntosVida>10)
        {
            jugador.puntosVida=10;
        }
        console.log(jugador.nombre+" consume "+this.nombre+", recupera "+(jugador.puntosVida-vidaAnterior)+" puntos de vida y ahora tiene "+(jugador.puntosVida));
    }
}





//Ejercicio 4

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

//Creamos el nuevo array
let clasificacion=[];

function clasificar()
{
    //Se copian al nuevo array los objetos que cumplen con la condicion
    clasificacion = puntuaciones.filter(item => item.puntuacion>100);
    //Se ordenan de mayor a menor puntuación
    clasificacion.sort(function (a, b){
        return (b.puntuacion - a.puntuacion)
    });

    //Se muestra por consola el nuevo array ordenado
    for(let i=0; i<clasificacion.length; i++)
    {
        console.log(clasificacion[i].nombre+" con "+clasificacion[i].puntuacion+" puntos.");
    }
}

//Se ejecuta la función
clasificar();