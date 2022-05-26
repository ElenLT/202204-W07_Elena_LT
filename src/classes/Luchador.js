import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
  constructor(name, family, age, arma, destreza, img, type) {
    super(name, family, age, img, type);
    this.arma = arma;
    this.destreza = destreza;
  }
  speak() {
    console.log('Primero pego y luego pregunto');
  }
}
