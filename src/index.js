class Personaje {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = true;
    this.serie = 'Juego de Tronos';
  }
  speak() {
    console.log(`Hello`);
  }
  die() {}
}

class Rey extends Personaje {
  constructor(name, family, age, años_reinado) {
    super(name, family, age);
    this.años_reinado = años_reinado;
  }
  speak() {
    console.log('Vais a morir todos');
  }
}

class Luchador extends Personaje {
  constructor(name, family, age, arma, destreza) {
    super(name, family, age);
    this.arma = arma;
    this.destreza = destreza;
  }
  speak() {
    console.log('Primero pego y luego pregunto');
  }
}

class Asesor extends Personaje {
  constructor(name, family, age, personaje_asesora) {
    super(name, family, age);
    this.personaje_asesora = personaje_asesora;
  }
  speak() {
    console.log('No sé por qué, pero creo que voy a morir pronto');
  }
}

class Escudero extends Personaje {
  constructor(name, family, age, personaje_sirve, pelotismo) {
    super(name, family, age);
    this.personaje_sirve = personaje_sirve;
    this.pelotismo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //se puede cambiar??
  }
  speak() {
    console.log('Soy un loser');
  }
}
