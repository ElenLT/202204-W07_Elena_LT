import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
  constructor(name, family, age, personaje_sirve, pelotismo, img, type) {
    super(name, family, age, img, type);
    this.personaje_sirve = personaje_sirve;
    this.pelotismo = pelotismo;
  }
  speak() {
    console.log('Soy un loser');
  }
}
