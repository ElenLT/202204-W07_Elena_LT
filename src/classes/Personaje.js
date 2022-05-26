export class Personaje {
  constructor(name, family, age, img, type) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.serie = 'Juego de Tronos';
    this.img = img;
    this.type = type;
  }
  speak() {
    console.log(`Hello`);
  }
  die() {
    this.isAlive = false;
  }
}
