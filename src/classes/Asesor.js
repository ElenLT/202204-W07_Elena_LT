import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
  constructor(name, family, age, personaje_asesora, img, type) {
    super(name, family, age, img, type);
    this.personaje_asesora = personaje_asesora;
  }
  speak() {
    console.log('No sé por qué, pero creo que voy a morir pronto');
  }
}
