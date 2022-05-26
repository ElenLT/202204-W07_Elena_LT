import { Personaje } from './Personaje.js';
export class Rey extends Personaje {
  constructor(name, family, age, años_reinado, img, type) {
    super(name, family, age, img, type);
    this.años_reinado = años_reinado;
  }
  speak() {
    console.log('Vais a morir todos');
  }
}
